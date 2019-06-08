(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./src/modules/settings/components/page.settings.tsx":
/*!***********************************************************!*\
  !*** ./src/modules/settings/components/page.settings.tsx ***!
  \***********************************************************/
/*! exports provided: SettingsPage, SettingInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SettingsPage\", function() { return SettingsPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SettingInputComponent\", function() { return SettingInputComponent; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nlet SettingsPage = class SettingsPage extends react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.unlockCombinations = [\n            [5, 4, 9],\n            [3, 2, 5],\n            [6, 1, 7],\n            [2, 6, 8],\n            [5, 1, 6],\n            [4, 1, 5]\n        ];\n        this.chosenCombination = this.unlockCombinations[Math.floor(Math.random() * 6)];\n        this.triggerUpdate = 0;\n        this.inputEl = null;\n        this.loading = false;\n        this.locked = true;\n    }\n    get canEdit() {\n        return this.props.currentUser.canEditSettings;\n    }\n    componentWillMount() {\n        setTimeout(() => this.props.updateDropboxBackups(), _utils__WEBPACK_IMPORTED_MODULE_3__[\"second\"]);\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"settings-component container-fluid\" }, this.locked ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", null,\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"h2\", null, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Settings are locked\")),\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"h3\", null, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"To prevent unintentional changes, solve the mathematical equation to unlock\")),\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"hr\", null),\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"math-question\" },\n                this.chosenCombination[0],\n                \" +\",\n                \" \",\n                this.chosenCombination[1],\n                \" =\",\n                \" \",\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"TextField\"], { type: \"number\", onChange: (e, v) => Number(v) === this.chosenCombination[2]\n                        ? (this.locked = false)\n                        : \"\" })))) : (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"unlocked\" },\n            \" \",\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`General Setting`) },\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](SettingInputComponent, { element: react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Dropdown\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Language\"), options: [\n                            { key: \"en\", text: \"English\" },\n                            { key: \"ar\", text: \"العربية\" }\n                        ], defaultSelectedKey: this.props.getSetting(\"lang\"), onChange: (ev, v) => {\n                            this.props.setSetting(\"lang\", v.key.toString());\n                        }, disabled: !this.canEdit }), info: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Choose the main language of display menus and items`) }),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](SettingInputComponent, { element: react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Dropdown\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Date format\"), options: [\n                            {\n                                key: \"dd/mm/yyyy\",\n                                text: \"dd/mm/yyyy\"\n                            },\n                            {\n                                key: \"mm/dd/yyyy\",\n                                text: \"mm/dd/yyyy\"\n                            },\n                            {\n                                key: \"dd MM 'YY\",\n                                text: \"dd MM 'YY\"\n                            }\n                        ], defaultSelectedKey: this.props.getSetting(\"date_format\"), onChange: (ev, v) => {\n                            this.props.setSetting(\"date_format\", v.key.toString());\n                        }, disabled: !this.canEdit }), info: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Set the date format to be used across this application`) }),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](SettingInputComponent, { element: react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Dropdown\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Week ends on\"), options: _utils__WEBPACK_IMPORTED_MODULE_3__[\"dateNames\"]\n                            .days()\n                            .map((dayName, index) => ({\n                            key: index.toString(),\n                            text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(dayName)\n                        })), defaultSelectedKey: this.props.getSetting(\"weekend_num\"), onChange: (ev, v) => {\n                            this.props.setSetting(\"weekend_num\", v.key.toString());\n                        }, disabled: !this.canEdit }), info: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`On which day the week ends`) }),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](SettingInputComponent, { element: react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"TextField\"], { value: this.props.getSetting(\"dropbox_accessToken\"), label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Dropbox access token\"), onChange: (ev, val) => {\n                            this.props.setSetting(\"dropbox_accessToken\", val);\n                            setTimeout(() => this.props.validateDropboxToken(), _utils__WEBPACK_IMPORTED_MODULE_3__[\"second\"] / 2);\n                        }, disabled: !this.canEdit }), info: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`This access token is used to store files across the application, like backups and images`) })),\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Financial Settings`) },\n                this.props.getSetting(\"time_tracking\") ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](SettingInputComponent, { element: react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Time expenses (per hour)\"), type: \"number\", value: this.props.getSetting(\"hourlyRate\"), onChange: (ev, newVal) => {\n                            this.props.setSetting(\"hourlyRate\", newVal.toString());\n                        }, disabled: !this.canEdit }), info: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\n                    // tslint:disable-next-line:max-line-length\n                    `When time tracking enabled, this is used to calculate profits and expenses, as time is also added to the expenses So here you can put the electricity, rent, and other time dependent expenses`) })) : (\"\"),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](SettingInputComponent, { element: react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Currency symbol\"), value: this.props.getSetting(\"currencySymbol\"), onChange: (ev, newVal) => {\n                            this.props.setSetting(\"currencySymbol\", newVal.toString());\n                        }, disabled: !this.canEdit }), info: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`This symbol you enter here will be used across your application`) })),\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Optional Modules and Features`) },\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Toggle\"], { onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Prescriptions module enabled\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Prescriptions module disabled\"), defaultChecked: !!this.props.getSetting(\"module_prescriptions\"), onChange: (ev, val) => {\n                        this.props.setSetting(\"module_prescriptions\", val ? \"enable\" : \"\");\n                    }, disabled: !this.canEdit }),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Toggle\"], { onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Orthodontic module enabled\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Orthodontic module disabled\"), defaultChecked: !!this.props.getSetting(\"module_orthodontics\"), onChange: (ev, val) => {\n                        this.props.setSetting(\"module_orthodontics\", val ? \"enable\" : \"\");\n                    }, disabled: !this.canEdit }),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Toggle\"], { onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Statistics module enabled\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Statistics module disabled\"), defaultChecked: !!this.props.getSetting(\"module_statistics\"), onChange: (ev, val) => {\n                        this.props.setSetting(\"module_statistics\", val ? \"enable\" : \"\");\n                    }, disabled: !this.canEdit }),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Toggle\"], { onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Time tracking enabled\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Time tracking disabled\"), defaultChecked: !!this.props.getSetting(\"time_tracking\"), onChange: (ev, val) => {\n                        this.props.setSetting(\"time_tracking\", val ? \"enable\" : \"\");\n                    }, disabled: !this.canEdit })),\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Backup and Restore`) }, _core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].isOnline ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", null,\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"DefaultButton\"], { onClick: () => {\n                        this.props.compact();\n                    }, iconProps: { iconName: \"ZipFolder\" }, className: \"m-l-5 m-t-5\", text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Run compaction\") }),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"DefaultButton\"], { onClick: () => {\n                        this.props.downloadCurrent();\n                    }, className: \"m-l-5 m-t-5\", iconProps: { iconName: \"Database\" }, text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Download a backup\") }),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"DefaultButton\"], { onClick: () => this.inputEl\n                        ? this.inputEl.click()\n                        : \"\", className: \"m-l-5 m-t-5\", iconProps: { iconName: \"DatabaseSync\" }, text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Restore from file\") }),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"input\", { ref: el => (this.inputEl = el), hidden: true, type: \"file\", multiple: false, onChange: (e) => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](this, void 0, void 0, function* () {\n                        if (e.target.files &&\n                            e.target.files.length > 0) {\n                            this.props.restoreFromFile(e.target.files[0]);\n                        }\n                    }) }))) : (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBarType\"].warning }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Backup and restore functionality are not available while you're offline\")))),\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Automated Backup and Restore`) }, _core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].isOnline ? (_core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].isDropboxActive ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", null,\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Dropdown\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Backup frequency\"), options: [\n                        {\n                            key: \"d\",\n                            text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Daily\")\n                        },\n                        {\n                            key: \"w\",\n                            text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Weekly\")\n                        },\n                        {\n                            key: \"m\",\n                            text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Monthly\")\n                        },\n                        {\n                            key: \"n\",\n                            text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Never\")\n                        }\n                    ], defaultSelectedKey: this.props.getSetting(\"backup_freq\"), onChange: (ev, v) => {\n                        this.props.setSetting(\"backup_freq\", v.key.toString());\n                    }, disabled: !this.canEdit }),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"TextField\"], { value: this.props.getSetting(\"backup_retain\"), label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"How many backups to retain\"), onChange: (ev, val) => {\n                        this.props.setSetting(\"backup_retain\", val);\n                    }, disabled: !this.canEdit, type: \"number\" }),\n                this.props.dropboxBackups.length ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"table\", { className: \"ms-table\" },\n                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"thead\", null,\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"tr\", null,\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"th\", null, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Backup\")),\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"th\", null, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Actions\")))),\n                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"tbody\", null, this.props.dropboxBackups.map(file => {\n                        const date = new Date(file.client_modified);\n                        return (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"tr\", { key: file.id },\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"td\", null,\n                                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { style: {\n                                            textAlign: \"center\",\n                                            fontSize: 10\n                                        } }, `${date.getDate()}/${date.getMonth() +\n                                        1}`)), text: Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"formatDate\"])(date, this.props.getSetting(\"date_format\")), subText: `${Math.round(file.size /\n                                        1000)} KB` })),\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"td\", null,\n                                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"TooltipHost\"], { content: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Delete\") },\n                                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"IconButton\"], { style: {\n                                            marginRight: 6\n                                        }, iconProps: {\n                                            iconName: this\n                                                .loading\n                                                ? \"sync\"\n                                                : \"delete\"\n                                        }, className: this\n                                            .loading\n                                            ? \"rotate\"\n                                            : \"\", disabled: !this\n                                            .canEdit, onClick: () => {\n                                            this.loading = true;\n                                            this.props\n                                                .deleteDropboxBackup(file.path_lower)\n                                                .then(() => {\n                                                this.loading = false;\n                                                this.props.updateDropboxBackups();\n                                            })\n                                                .catch(() => {\n                                                this.loading = false;\n                                                this.props.updateDropboxBackups();\n                                            });\n                                        } })),\n                                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"TooltipHost\"], { content: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Restore\") },\n                                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"IconButton\"], { style: {\n                                            marginRight: 6\n                                        }, iconProps: {\n                                            iconName: this\n                                                .loading\n                                                ? \"sync\"\n                                                : \"DatabaseSync\"\n                                        }, className: this\n                                            .loading\n                                            ? \"rotate\"\n                                            : \"\", disabled: !this\n                                            .canEdit, onClick: () => {\n                                            this.loading = true;\n                                            this.props\n                                                .restoreFromDropbox(file.path_lower)\n                                                .then(() => (this.loading = false))\n                                                .catch(() => (this.loading = false));\n                                        } })))));\n                    })))) : (\"\"))) : (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBarType\"].warning }, \"A valid DropBox access token is required for this section\"))) : (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBarType\"].warning }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Backup and restore functionality are not available while you're offline\"))))))));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"observable\"]\n], SettingsPage.prototype, \"triggerUpdate\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"observable\"]\n], SettingsPage.prototype, \"inputEl\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], SettingsPage.prototype, \"canEdit\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"observable\"]\n], SettingsPage.prototype, \"loading\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"observable\"]\n], SettingsPage.prototype, \"locked\", void 0);\nSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_5__[\"observer\"]\n], SettingsPage);\n\nlet SettingInputComponent = class SettingInputComponent extends react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"] {\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], { gutter: 12, style: { marginBottom: 20 } },\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { style: { marginBottom: -15 }, md: 12 }, this.props.element),\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { md: 12 },\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBar\"], { style: { marginTop: 22 }, messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBarType\"].info }, this.props.info))));\n    }\n};\nSettingInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_5__[\"observer\"]\n], SettingInputComponent);\n\n\n\n//# sourceURL=webpack:///./src/modules/settings/components/page.settings.tsx?");

/***/ })

}]);