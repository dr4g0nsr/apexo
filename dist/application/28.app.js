(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./src/modules/patients/components/page.patients.tsx":
/*!***********************************************************!*\
  !*** ./src/modules/patients/components/page.patients.tsx ***!
  \***********************************************************/
/*! exports provided: PatientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PatientsPage\", function() { return PatientsPage; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nconst PatientDetailsPanel = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! modules/patients/components/patient-details */ \"./src/modules/patients/components/patient-details.tsx\")))\n            .PatientDetailsPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst DentalHistoryPanel = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! modules/patients/components/dental-history */ \"./src/modules/patients/components/dental-history.tsx\")))\n            .DentalHistoryPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nlet PatientsPage = class PatientsPage extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.tabs = [\n            {\n                key: \"details\",\n                title: \"Patient Details\",\n                icon: \"DietPlanNotebook\"\n            },\n            {\n                key: \"dental\",\n                title: \"Dental History\",\n                icon: \"teeth\"\n            },\n            {\n                key: \"gallery\",\n                title: \"Gallery and X-Rays\",\n                icon: \"PhotoCollection\"\n            },\n            {\n                key: \"appointments\",\n                title: \"Upcoming Appointments\",\n                icon: \"Calendar\",\n                hidden: !this.props.currentUser.canViewAppointments\n            },\n            {\n                key: \"delete\",\n                title: \"Delete\",\n                icon: \"Trash\",\n                hidden: !this.canEdit,\n                hiddenOnPanel: true\n            }\n        ];\n        this.selectedId = this.props.currentLocation.split(\"/\")[1];\n        this.viewWhich = this.props.currentLocation.split(\"/\")[1]\n            ? \"details\"\n            : \"\";\n    }\n    get patient() {\n        return this.props.patients.find(patient => patient._id === this.selectedId);\n    }\n    get canEdit() {\n        return this.props.currentUser.canEditPatients;\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"patients-component\" },\n            this.patient ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Panel\"], { key: this.selectedId, isOpen: !!this.patient, type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PanelType\"].medium, closeButtonAriaLabel: \"Close\", isLightDismiss: true, onDismiss: () => {\n                    this.selectedId = \"\";\n                    this.viewWhich = \"\";\n                }, onRenderNavigation: () => {\n                    return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"panel-heading\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null,\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 22 },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileComponent\"], { name: this.patient.name, size: 2, avatar: this.patient.avatar\n                                        ? _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].table[this.patient\n                                            .avatar]\n                                            ? _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].table[this\n                                                .patient\n                                                .avatar]\n                                            : _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].fetchImage(this\n                                                .patient\n                                                .avatar)\n                                        : undefined })),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 2, className: \"close\" },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { iconProps: {\n                                        iconName: \"cancel\"\n                                    }, onClick: () => {\n                                        this.selectedId = \"\";\n                                        this.viewWhich = \"\";\n                                    } }))),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"PanelTabs\"], { currentSelectedKey: this.viewWhich, onSelect: key => {\n                                this.viewWhich = key;\n                            }, items: this.tabs })));\n                } },\n                this.viewWhich === \"details\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](PatientDetailsPanel, { patient: this.patient, currentUser: this.props.currentUser, usedLabels: this.props.patients\n                        .map(x => x.labels)\n                        .reduce((a, b) => a.concat(b.map(x => x.text)), []), onChangeViewWhich: key => (this.viewWhich = key) })) : (\"\"),\n                this.viewWhich === \"dental\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](DentalHistoryPanel, { patient: this.patient, currentUser: this.props.currentUser })) : (\"\"),\n                this.viewWhich === \"gallery\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_modules__WEBPACK_IMPORTED_MODULE_3__[\"PatientGalleryPanel\"], { patient: this.patient, currentUser: this.props.currentUser, saveFile: obj => this.props.saveFile(obj), getFile: path => this.props.getFile(path), removeFile: path => this.props.removeFile(path) })) : (\"\"),\n                this.viewWhich === \"appointments\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_modules__WEBPACK_IMPORTED_MODULE_3__[\"PatientAppointmentsPanel\"], { patient: this.patient, currentUser: this.props.currentUser, appointments: this.patient.appointments, onAdd: appointment => this.props.onAddAppointment(appointment), dateFormat: this.props.dateFormat, onDeleteAppointment: id => this.props.onDeleteAppointment(id), availablePrescriptions: this.props.availablePrescriptions, availableTreatments: this.props.availableTreatments, currencySymbol: this.props.currencySymbol, prescriptionsEnabled: this.props.prescriptionsEnabled, timeTrackingEnabled: this.props.timeTrackingEnabled, operatingStaff: this.props.operatingStaff, appointmentsForDay: (a, b, c) => this.props.appointmentsForDay(a, b, c) })) : (\"\"),\n                this.viewWhich === \"delete\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].warning }, `${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"All of the patient\")} ${this.patient.name}${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"'s data will be deleted along with\")} ${this.patient.appointments.length} ${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"of appointments\")}.`),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PrimaryButton\"], { className: \"delete\", iconProps: {\n                            iconName: \"delete\"\n                        }, text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Delete\"), onClick: () => {\n                            this.props.doDeletePatient(this.selectedId);\n                            this.selectedId = \"\";\n                            this.viewWhich = \"\";\n                        } }))) : (\"\"))) : (\"\"),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"DataTableComponent\"], { maxItemsOnLoad: 10, className: \"patients-data-table\", heads: [\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Patient\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Last/Next Appointment\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Total/Outstanding Payments\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Label\")\n                ], rows: this.props.patients.map(patient => ({\n                    id: patient._id,\n                    searchableString: patient.searchableString,\n                    cells: [\n                        {\n                            dataValue: patient.name +\n                                \" \" +\n                                patient.age +\n                                \" \" +\n                                Object(_modules__WEBPACK_IMPORTED_MODULE_3__[\"genderToString\"])(patient.gender),\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileComponent\"], { name: patient.name, avatar: patient.avatar\n                                        ? _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].table[patient.avatar]\n                                            ? _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].table[patient.avatar]\n                                            : _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].fetchImage(patient.avatar)\n                                        : undefined, secondaryElement: react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null,\n                                        Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(Object(_modules__WEBPACK_IMPORTED_MODULE_3__[\"genderToString\"])(patient.gender)),\n                                        \" \",\n                                        \"- \",\n                                        patient.age,\n                                        \" \",\n                                        Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"years old\")), size: 3 }),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"TableActions\"], { items: this.tabs, onSelect: key => {\n                                        if (key === \"delete\") {\n                                            this.props.onDeletePatient(patient._id);\n                                        }\n                                        else {\n                                            this.selectedId =\n                                                patient._id;\n                                            this.viewWhich = key;\n                                        }\n                                    } }))),\n                            className: \"no-label\",\n                            onClick: () => {\n                                this.selectedId = patient._id;\n                                this.viewWhich = \"details\";\n                            }\n                        },\n                        {\n                            dataValue: (patient.lastAppointment ||\n                                patient.nextAppointment || { date: 0 }).date,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: patient.lastAppointment\n                                        ? patient.lastAppointment\n                                            .treatment\n                                            ? patient\n                                                .lastAppointment\n                                                .treatment.type\n                                            : \"\"\n                                        : \"\", subText: patient.lastAppointment\n                                        ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(patient\n                                            .lastAppointment\n                                            .date, this.props\n                                            .dateFormat)\n                                        : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No last appointment\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Previous\" })), onClick: () => { }, initialsColor: patient.lastAppointment\n                                        ? undefined\n                                        : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: patient.nextAppointment\n                                        ? patient.nextAppointment\n                                            .treatment\n                                            ? patient\n                                                .nextAppointment\n                                                .treatment.type\n                                            : \"\"\n                                        : \"\", subText: patient.nextAppointment\n                                        ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(patient\n                                            .nextAppointment\n                                            .date, this.props\n                                            .dateFormat)\n                                        : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No next appointment\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Next\" })), onClick: () => { }, initialsColor: patient.nextAppointment\n                                        ? undefined\n                                        : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }))),\n                            className: \"hidden-xs\"\n                        },\n                        {\n                            dataValue: patient.totalPayments,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: this.props.currencySymbol +\n                                        patient.totalPayments.toString(), subText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Payments made\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"CheckMark\" })), onClick: () => { }, initialsColor: patient.totalPayments > 0\n                                        ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].darkBlue\n                                        : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: this.props.currencySymbol +\n                                        (patient.differenceAmount < 0\n                                            ? patient.outstandingAmount.toString()\n                                            : patient.differenceAmount >\n                                                0\n                                                ? patient.overpaidAmount.toString()\n                                                : \"0\"), subText: patient.differenceAmount < 0\n                                        ? Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Outstanding amount\")\n                                        : patient.differenceAmount >\n                                            0\n                                            ? Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Overpaid amount\")\n                                            : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No outstanding amount\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Cancel\" })), onClick: () => { }, initialsColor: patient.differenceAmount !== 0\n                                        ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].darkRed\n                                        : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }))),\n                            className: \"hidden-xs\"\n                        },\n                        {\n                            dataValue: patient.labels\n                                .map(x => x.text)\n                                .join(\",\"),\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null, patient.labels.map((label, index) => {\n                                return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"TagComponent\"], { key: index, text: label.text, type: label.type }));\n                            }))),\n                            className: \"hidden-xs\"\n                        }\n                    ]\n                })), commands: this.canEdit\n                    ? [\n                        {\n                            key: \"addNew\",\n                            title: \"Add new\",\n                            name: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Add new\"),\n                            onClick: () => {\n                                const patient = new _modules__WEBPACK_IMPORTED_MODULE_3__[\"Patient\"]();\n                                this.props.onAddPatient(patient);\n                                this.selectedId = patient._id;\n                                this.viewWhich = \"details\";\n                            },\n                            iconProps: {\n                                iconName: \"Add\"\n                            }\n                        }\n                    ]\n                    : [] })));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], PatientsPage.prototype, \"selectedId\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], PatientsPage.prototype, \"viewWhich\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], PatientsPage.prototype, \"patient\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], PatientsPage.prototype, \"canEdit\", null);\nPatientsPage = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], PatientsPage);\n\n\n\n//# sourceURL=webpack:///./src/modules/patients/components/page.patients.tsx?");

/***/ })

}]);