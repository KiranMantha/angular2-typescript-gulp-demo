"use strict";
const router_1 = require('@angular/router');
const routes = [
    { path: '', redirectTo: 'todos', pathMatch: 'full' },
    { path: 'todos', loadChildren: 'scripts/components/Todos/index' },
    { path: 'cars', loadChildren: 'scripts/components/Cars/index' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(routes);

//# sourceMappingURL=Routes.js.map
