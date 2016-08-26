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
const todo_service_1 = require("../../Services/todo-service");
const todo_modal_1 = require("../../Modals/todo-modal");
let TodoListComponent = class TodoListComponent {
    constructor(_todoService, 
        //@Inject(DialogService) private _dialogService,
        _viewContainer) {
        this._todoService = _todoService;
        this._viewContainer = _viewContainer;
        this._todoModel = new todo_modal_1.TodoModal();
    }
    _saveTodo() {
        this._todoModel.id = this._todoService.todos.length + 1;
        this._todoService.todos.push(this._todoModel);
        this._todoModel = new todo_modal_1.TodoModal();
    }
};
TodoListComponent = __decorate([
    core_1.Component({
        selector: '[todo-list]',
        templateUrl: 'Components/Todos/todo-list.tpl.html'
    }),
    __param(0, core_1.Inject(todo_service_1.TodoService)), 
    __metadata('design:paramtypes', [todo_service_1.TodoService, core_1.ViewContainerRef])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;

//# sourceMappingURL=todo-list.component.js.map
