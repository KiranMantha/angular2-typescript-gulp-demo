"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const common_1 = require('@angular/common');
const forms_1 = require('@angular/forms');
const dialog_service_1 = require("../../Services/dialog-service");
const dialog_component_1 = require("./dialog.component");
let DialogModule = class DialogModule {
};
DialogModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule],
        declarations: [dialog_component_1.ModalDialog],
        exports: [dialog_component_1.ModalDialog],
        providers: [dialog_service_1.DialogService]
    }), 
    __metadata('design:paramtypes', [])
], DialogModule);
exports.DialogModule = DialogModule;

//# sourceMappingURL=index.js.map
