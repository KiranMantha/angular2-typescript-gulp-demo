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
const index_1 = require('../GridView/index');
const cars_service_1 = require("../../Services/cars-service");
const car_component_1 = require("./car.component");
const cars_list_component_1 = require("./cars-list.component");
const car_routes_1 = require('./car-routes');
const index_2 = require('../ModalDialog/index');
/*
Dont declare a component if it is going to dynamically created.
All the dynamically created components will come under AppModule scope.
If Declared, code will throw error saying that the component is refered twice in CarsModule and AppModule.
*/
let CarsModule = class CarsModule {
};
CarsModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            car_routes_1.routing,
            index_1.GridModule,
            index_2.DialogModule
        ],
        declarations: [
            car_component_1.CarComponent,
            cars_list_component_1.CarListComponent
        ],
        providers: [cars_service_1.CarsService]
    }), 
    __metadata('design:paramtypes', [])
], CarsModule);
exports.CarsModule = CarsModule;

//# sourceMappingURL=index.js.map
