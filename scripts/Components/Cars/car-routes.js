"use strict";
const router_1 = require('@angular/router');
const car_component_1 = require("./car.component");
const cars_list_component_1 = require("./cars-list.component");
const routes = [
    {
        path: 'cars',
        component: car_component_1.CarComponent,
        children: [
            { path: '', component: cars_list_component_1.CarListComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);

//# sourceMappingURL=car-routes.js.map
