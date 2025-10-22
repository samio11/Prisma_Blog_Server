import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post("/create", userController.createUser);
router.get("/get", userController.getAllUser);
router.get("/get/:id", userController.getAUser);
router.patch("/update/:id", userController.updateAUser);
router.delete("/delete/:id", userController.deleteAUser);

export const userRoutes = router;
