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
const core_1 = require("@angular/core");
const Rx_1 = require("rxjs/Rx");
const _ = require('lodash');
let CarsService = class CarsService {
    constructor() {
        this._cars = new Rx_1.BehaviorSubject([]);
        this.$cars = this._cars.asObservable();
        this._dataStore = { cars: [] };
    }
    addCar(car) {
        if (car.id === 0) {
            car.id = this._dataStore.cars.length + 1;
            this._dataStore.cars.push(car);
        }
        else {
            _.assign(_.filter(this._dataStore.cars, { 'id': car.id }), car);
        }
        this._cars.next(this._dataStore.cars);
    }
    deleteCar(id) {
        _.remove(this._dataStore.cars, ['id', id]);
        this._cars.next(this._dataStore.cars);
    }
};
CarsService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], CarsService);
exports.CarsService = CarsService;

//# sourceMappingURL=cars-service.js.map
