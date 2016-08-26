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
let GridView = class GridView {
    constructor(zone) {
        this.zone = zone;
        this.gvOptions = {
            data: [],
            columnDefs: [],
            showActions: false,
            actionsToShow: ['VIEW', 'EDIT', 'DELETE']
        };
        this.viewEvent = new core_1.EventEmitter();
        this.editEvent = new core_1.EventEmitter();
        this.deleteEvent = new core_1.EventEmitter();
    }
    _view(evt, row) {
        this.viewEvent.next({ event: evt, modal: row });
    }
    _edit(evt, row) {
        this.editEvent.next({ event: evt, modal: row });
    }
    _delete(evt, row) {
        this.deleteEvent.next({ event: evt, modal: row });
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], GridView.prototype, "gvOptions", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], GridView.prototype, "viewEvent", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], GridView.prototype, "editEvent", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], GridView.prototype, "deleteEvent", void 0);
GridView = __decorate([
    core_1.Component({
        selector: '[grid-view]',
        templateUrl: 'Components/GridView/grid-view.tpl.html'
    }), 
    __metadata('design:paramtypes', [core_1.NgZone])
], GridView);
exports.GridView = GridView;

//# sourceMappingURL=grid-view.component.js.map
