import express from "express";
import { userController } from "./user.controller";
const router = express.Router();

router.post("/create-user", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/userId", userController.getSingleUser);
router.delete("/courseId", userController.deleteUser);

export const userRoutes = router;
