import * as React from "react";
import { computed, observable, observe } from "mobx";
import { Patient } from "../../../data";
import { observer } from "mobx-react";
import "./gallery.scss";
import { API } from "../../../../../core/index";
import { lang } from "../../../../../core/i18/i18";
import { IconButton, Icon } from "office-ui-fabric-react";
import { files } from "../../../../../core/files/files";
import {
	PickAndUpload,
	fileTypes
} from "../../../../../assets/components/pick-files/pick-files";
import { diff } from "fast-array-diff";
import { Section } from "../../../../../assets/components/section/section";

interface Image {
	path: string;
	uri: string;
}

@observer
export class SinglePatientGallery extends React.Component<
	{ patient: Patient },
	{}
> {
	@computed get canEdit() {
		return API.user.currentUser.canEditPatients;
	}

	@observable uploading: boolean = false;

	@observable selectedImagePath: string = "";

	@observable imagesTable: { [key: string]: string } = {};

	@computed get selectedImageURI() {
		return this.imagesTable[this.selectedImagePath];
	}

	stopObservation: () => void = function() {};

	render() {
		return (
			<Section title="Patient Gallery" >
				<div className="single-patient-gallery">
					<div className="thumbs">
						{this.canEdit ? (
							this.uploading ? (
								<Icon
									iconName="sync"
									className="rotate"
									style={{ padding: 10 }}
								/>
							) : (
								<PickAndUpload
									allowMultiple={true}
									accept={fileTypes.image}
									onFinish={paths => {
										this.props.patient.gallery.push(
											...paths
										);
									}}
									onStartLoading={() => {
										this.uploading = true;
									}}
									onFinishLoading={() => {
										this.uploading = false;
									}}
									targetDir="patient-galleries"
								>
									<IconButton
										className={`add-photo`}
										iconProps={{
											iconName: "add"
										}}
									/>
								</PickAndUpload>
							)
						) : (
							""
						)}
						{Object.keys(this.imagesTable).map(imagePath => {
							const URI = this.imagesTable[imagePath];
							return URI ? (
								<span
									className={`thumb ${
										this.selectedImagePath === imagePath
											? "selected"
											: ""
									}`}
									key={imagePath}
									style={{
										backgroundImage: `url('${
											URI ? URI : ""
										}')`
									}}
									onClick={() => {
										this.selectedImagePath = imagePath;
									}}
								/>
							) : (
								<div
									key={imagePath + "-placeholder"}
									className="placeholder"
								>
									<Icon iconName="sync" className="rotate" />
								</div>
							);
						})}
					</div>
					{this.selectedImagePath ? (
						<div className="viewport">
							<img
								key={this.selectedImagePath}
								src={this.selectedImageURI}
							/>
							{this.canEdit ? (
								<IconButton
									className="delete-photo"
									iconProps={{ iconName: "trash" }}
									onClick={async () => {
										await this.removeImage(
											this.selectedImagePath
										);
										this.selectedImagePath = "";
									}}
								/>
							) : (
								""
							)}
						</div>
					) : (
						""
					)}
				</div>{" "}
				<div style={{ clear: "both" }} />
			</Section>
		);
	}

	componentDidMount() {
		this.props.patient.gallery.forEach(async path => {
			await this.addImage(path);
		});
		this.stopObservation = this.observe();
	}

	componentWillUnmount() {
		this.stopObservation();
	}

	async addImage(path: string) {
		this.imagesTable[path] = "";
		const uri = await files.get(path);
		this.imagesTable[path] = uri;
		return;
	}

	async removeImage(path: string) {
		await files.remove(this.selectedImagePath);
		const selectedImageIndex = this.props.patient.gallery.indexOf(
			this.selectedImagePath
		);
		this.props.patient.gallery.splice(selectedImageIndex, 1);
		delete this.imagesTable[path];
		return;
	}

	observe() {
		return observe(this.props.patient, change => {
			if (change.name === "gallery") {
				const diffResult = diff(
					Object.keys(this.imagesTable),
					this.props.patient.gallery
				);
				diffResult.added.forEach(path => {
					this.addImage(path);
				});
				diffResult.removed.forEach(path => {
					this.removeImage(path);
				});
			}
		});
	}
}
