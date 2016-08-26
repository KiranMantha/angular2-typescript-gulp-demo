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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require('@angular/core');
const cars_service_1 = require("../../Services/cars-service");
const dialog_service_1 = require("../../Services/dialog-service");
const car_modal_1 = require("../../Modals/car-modal");
const car_detail_component_1 = require('./car-detail.component');
let CarListComponent = class CarListComponent {
    constructor(_carsService, _dialogService, _viewContainer, zone) {
        this._carsService = _carsService;
        this._dialogService = _dialogService;
        this._viewContainer = _viewContainer;
        this.zone = zone;
        this._carModal = new car_modal_1.CarModal();
    }
    _showModal(modal) {
        this._carsService.selectedCar = modal;
        this._dialogService.config.viewContainer = this._viewContainer;
        this._dialogService.config.classNameArray = ['ng-dialog', 'car'];
        this._dialogService.config.closeByDocument = false;
        this._dialogService.config.component = car_detail_component_1.CarDetailsComponent;
        this._dialogService.openDialog();
    }
    _newCar() {
        this._showModal(new car_modal_1.CarModal());
    }
    _editCar(evt) {
        this._showModal(evt.modal);
    }
    _deleteCar(evt) {
        this._carsService.deleteCar(evt.modal.id);
    }
    ngOnInit() {
        this._carsService.$cars.subscribe(updatedCars => {
            this.zone.run(() => {
                this.gvOptions = {
                    data: updatedCars,
                    showActions: true,
                    actionsToShow: ['EDIT', 'DELETE'],
                    columnDefs: [
                        { displayName: 'Id', fieldName: 'id' },
                        { displayName: 'Car Name', fieldName: 'name' },
                        { displayName: 'Car Type', fieldName: 'type' },
                        { displayName: 'Car Company', fieldName: 'company' }
                    ]
                };
            });
        });
    }
};
CarListComponent = __decorate([
    core_1.Component({
        selector: '[cars-list]',
        templateUrl: 'Components/cars/cars-list.tpl.html'
    }),
    __param(0, core_1.Inject(cars_service_1.CarsService)),
    __param(1, core_1.Inject(dialog_service_1.DialogService)), 
    __metadata('design:paramtypes', [cars_service_1.CarsService, dialog_service_1.DialogService, core_1.ViewContainerRef, core_1.NgZone])
], CarListComponent);
exports.CarListComponent = CarListComponent;

//# sourceMappingURL=cars-list.component.js.map
