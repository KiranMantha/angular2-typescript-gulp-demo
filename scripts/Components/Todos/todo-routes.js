"use strict";
const router_1 = require('@angular/router');
const todo_component_1 = require("./todo.component");
const todo_list_component_1 = require("./todo-list.component");
const todo_details_component_1 = require("./todo-details.component");
const routes = [
    {
        path: 'todos',
        component: todo_component_1.TodoComponent,
        children: [
            { path: '', component: todo_list_component_1.TodoListComponent },
            { path: ':id', component: todo_details_component_1.TodoDetailsComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);

//# sourceMappingURL=todo-routes.js.map
