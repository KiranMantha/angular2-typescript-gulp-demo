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
const router_1 = require("@angular/router");
const todo_service_1 = require("../../Services/todo-service");
let TodoDetailsComponent = class TodoDetailsComponent {
    constructor(_route, _todoService) {
        this._route = _route;
        this._todoService = _todoService;
    }
    ngOnInit() {
        if (this._route.snapshot.params['id']) {
            let id = parseInt(this._route.snapshot.params['id'], 10);
            this._todoModal = this._todoService.todos[id - 1];
        }
        else {
            this._todoModal = this._todoService.todos[1];
        }
    }
};
TodoDetailsComponent = __decorate([
    core_1.Component({
        selector: '[todo-details]',
        templateUrl: 'Components/Todos/todo-details.tpl.html'
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, todo_service_1.TodoService])
], TodoDetailsComponent);
exports.TodoDetailsComponent = TodoDetailsComponent;

//# sourceMappingURL=todo-details.component.js.map
