import "./main.scss";
import { AsyncComponent } from "@common-components";
import { LoginStep, router, status, text } from "@core";
import { ChooseUserComponent, HeaderView, LoginView, MenuView, UserPanelView } from "@main-components";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Async, MessageBar, PrimaryButton, Spinner, SpinnerSize } from "office-ui-fabric-react";
import * as React from "react";

@observer
export class ErrorBoundaryView extends React.Component<{}> {
	@observable hasError: boolean = false;
	@observable stackTrace: string = "";

	componentDidCatch(error: any, info: { componentStack: string }) {
		this.hasError = true;
		this.stackTrace = error.stack;
		console.log(
			error,
			error.stack,
			error.toString(),
			JSON.stringify(error),
			error.message,
			info
		);
	}

	render() {
		if (this.hasError) {
			return (
				<MessageBar className="eb" messageBarType={1}>
					Error occurred
					<br /> send a screenshot of the following details
					<textarea defaultValue={this.stackTrace} />
					<PrimaryButton
						onClick={() => {
							location.href = location.href.split("#")[0];
							location.reload();
						}}
						text={text("Reload")}
					/>
				</MessageBar>
			);
		}
		return this.props.children;
	}
}

@observer
export class MainView extends React.Component<{}, {}> {
	componentDidCatch() {
		console.log("Error");
	}

	componentDidMount() {
		setInterval(() => {
			if (document.querySelectorAll(".ms-Panel").length) {
				document.querySelectorAll("html")[0].classList.add("has-panel");
			} else {
				document
					.querySelectorAll("html")[0]
					.classList.remove("has-panel");
			}
		}, 100);
	}

	render() {
		if (status.step === LoginStep.allDone) {
			return (
				<ErrorBoundaryView>
					<div className="main-component">
						<div id="router-outlet">
							<AsyncComponent
								key={router.currentNamespace}
								loader={async () => {
									await router.currentLoader();
									return await router.currentComponent();
								}}
							/>
						</div>
						<HeaderView />
						<UserPanelView />
						<MenuView />
					</div>
				</ErrorBoundaryView>
			);
		} else if (status.step === LoginStep.chooseUser) {
			return <ChooseUserComponent />;
		} else if (status.step === LoginStep.initial) {
			return <LoginView />;
		} else {
			return (
				<div className="spinner-container">
					<Spinner
						size={SpinnerSize.large}
						label={text(`Please wait`)}
					/>
				</div>
			);
		}
	}
}
