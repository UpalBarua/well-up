import express from "express";

import { courseController } from "./courses.controller";
const router = express.Router();

router.post("/create-course", courseController.createCourse);
router.get("/", courseController.getAllCourses);
router.get("/courseID", courseController.getSingleCourse);
router.delete("/courseId", courseController.deleteCourse);

export const courseRoutes = router;
