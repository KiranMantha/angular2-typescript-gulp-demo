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
const http_1 = require('@angular/http');
const _ = require('lodash');
let ModalDialog = class ModalDialog {
    constructor(_ElementRef, _http, dcl, injector, appRef) {
        this._ElementRef = _ElementRef;
        this._http = _http;
        this.dcl = dcl;
        this.injector = injector;
        this.appRef = appRef;
        this._classArray = [];
        this.template = '';
        this.templateUrl = '';
        this.classNameArray = [];
        this._elementRef = _ElementRef;
    }
    openDialog() {
        $(this._elementRef.nativeElement).parents('body').toggleClass('ng-dialog-open');
        if (this.templateUrl !== '') {
            this._loadTemplate(this.templateUrl).subscribe(content => {
                $(this._elementRef.nativeElement).find('.ng-dialog-content')[0].innerHTML = content;
            });
        }
        else if (this.component) {
            this._loadComponent(this.component);
        }
        else {
            this._content = this.template;
        }
        if (this.classNameArray.length > 0) {
            this._classArray = _.uniq(_.concat('ng-dialog', this.classNameArray));
        }
        else {
            this._classArray = ['ng-dialog'];
        }
    }
    closeDialog(evt) {
        if (this.closeByDocument) {
            if (evt.target.classList.contains('ng-dialog') || evt.target.classList.contains('ng-dialog-close')) {
                this._close();
            }
        }
        else {
            if (evt.target.classList.contains('ng-dialog-close')) {
                this._close();
            }
        }
    }
    _close() {
        $(this._elementRef.nativeElement).parents('body').toggleClass('ng-dialog-open');
        //this.childComponentRef.destroy();
        //this.appRef.tick();
        this.componentRef.destroy();
        if (_.isFunction(this.callBackComponent[this.callbackOnClose])) {
            this.callBackComponent[this.callbackOnClose]();
        }
    }
    _loadComponent(component) {
        this.dcl.loadAsRoot(this.component, '.ng-dialog-content', this.injector).then(componentref => {
            this.appRef._loadComponent(componentref);
            this.childComponentRef = componentref;
        });
    }
    _loadTemplate(tmpl) {
        return this._http.get(tmpl)
            .map(this._extractData);
    }
    _extractData(res) {
        let body = res;
        return body.text() || '';
    }
};
ModalDialog = __decorate([
    core_1.Component({
        selector: '[ng-dialog]',
        providers: [http_1.HTTP_PROVIDERS],
        templateUrl: 'Components/ModalDialog/dialog.tpl.html'
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef, http_1.Http, core_1.DynamicComponentLoader, core_1.Injector, core_1.ApplicationRef])
], ModalDialog);
exports.ModalDialog = ModalDialog;

//# sourceMappingURL=dialog.component.js.map
