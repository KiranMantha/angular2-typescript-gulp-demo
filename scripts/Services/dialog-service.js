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
const dialog_component_1 = require("../Components/ModalDialog/dialog.component");
const Observable_1 = require('rxjs/Observable');
let DialogService = class DialogService {
    constructor(_componentResolver) {
        this._componentResolver = _componentResolver;
        this.config = {
            viewContainer: core_1.ViewContainerRef,
            template: '',
            templateUrl: '',
            closeByDocument: true,
            classNameArray: [],
            component: core_1.Component,
            callBackComponent: core_1.Component
        };
    }
    openDialog() {
        this._createComponent(dialog_component_1.ModalDialog, this.config.viewContainer)
            .subscribe(component => {
            this._dialog = component;
            this._dialog.instance.templateUrl = this.config.templateUrl;
            this._dialog.instance.template = this.config.template;
            this._dialog.instance.closeByDocument = this.config.closeByDocument;
            this._dialog.instance.classNameArray = this.config.classNameArray;
            this._dialog.instance.component = this.config.component;
            this._dialog.instance.callBackComponent = this.config.callBackComponent;
            this._dialog.instance.callbackOnClose = this.callbackOnClose;
            this._dialog.instance.openDialog();
        });
    }
    _createComponent(_componentName, _viewContainer) {
        return Observable_1.Observable.create(obs => {
            this._componentResolver.resolveComponent(_componentName).then(factory => {
                let _component = _viewContainer.createComponent(factory);
                _component.instance.componentRef = _component;
                _component.changeDetectorRef.detectChanges();
                _component.onDestroy(() => {
                    _component.changeDetectorRef.detach();
                });
                obs.next(_component);
                obs.complete();
            });
        });
    }
    closeDialog() {
        this._dialog.instance.closeDialog();
    }
};
DialogService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [core_1.ComponentResolver])
], DialogService);
exports.DialogService = DialogService;

//# sourceMappingURL=dialog-service.js.map
