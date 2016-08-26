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
const car_modal_1 = require("../../Modals/car-modal");
let CarDetailsComponent = class CarDetailsComponent {
    constructor(_carsService) {
        this._carsService = _carsService;
    }
    _saveCar() {
        this._carsService.addCar(this._carModal);
        this._carModal = new car_modal_1.CarModal();
    }
    ngOnInit() {
        this._carModal = this._carsService.selectedCar;
    }
};
CarDetailsComponent = __decorate([
    core_1.Component({
        selector: '[car-details]',
        templateUrl: 'Components/Cars/car.tpl.html'
    }),
    __param(0, core_1.Inject(cars_service_1.CarsService)), 
    __metadata('design:paramtypes', [cars_service_1.CarsService])
], CarDetailsComponent);
exports.CarDetailsComponent = CarDetailsComponent;

//# sourceMappingURL=car-detail.component.js.map
