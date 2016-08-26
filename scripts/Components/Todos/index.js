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
const todo_service_1 = require("../../Services/todo-service");
const todo_component_1 = require("./todo.component");
const todo_list_component_1 = require("./todo-list.component");
const todo_details_component_1 = require("./todo-details.component");
const todo_routes_1 = require('./todo-routes');
let TodoModule = class TodoModule {
};
TodoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            todo_routes_1.routing
        ],
        declarations: [
            todo_component_1.TodoComponent,
            todo_list_component_1.TodoListComponent,
            todo_details_component_1.TodoDetailsComponent
        ],
        providers: [todo_service_1.TodoService]
    }), 
    __metadata('design:paramtypes', [])
], TodoModule);
exports.TodoModule = TodoModule;

//# sourceMappingURL=index.js.map
