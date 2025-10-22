import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";

export const rootRoute = Router();

const excludingModule = [
  {
    path: "/user",
    element: userRoutes,
  },
];

excludingModule.forEach((x) => rootRoute.use(x.path, x.element));
