"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRoute = void 0;
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
exports.rootRoute = (0, express_1.Router)();
const excludingModule = [
    {
        path: "/user",
        element: user_route_1.userRoutes,
    },
];
excludingModule.forEach((x) => exports.rootRoute.use(x.path, x.element));
