import { Request, Response } from "express";
import { courseServices } from "./courses.service";

export const createCourse = async (req: Request, res: Response) => {
  try {
    const course = req.body;
    const result = await courseServices.createCourseDb(course);
    res.status(200).json({
      success: true,
      message: "course create successfully",
      result: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const result = await courseServices.getAllCoursesDb();

    res.status(200).json({
      success: true,
      message: "courses find successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getSingleCourse = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;

    // Check if userId is defined before using it
    if (courseId) {
      const result = await courseServices.getSingleCourseDb(courseId);

      res.status(200).json({
        success: true,
        message: "course found successfully",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "userId is not provided",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error finding user",
      error: error,
    });
  }
};
export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;

    // Check if userId is defined before using it
    if (courseId) {
      const result = await courseServices.deleteCourseDb(courseId);

      res.status(200).json({
        success: true,
        message: "course found successfully",
        data: result,
      });
    } else {
      // Handle the case where userId is undefined
      res.status(400).json({
        success: false,
        message: "courseId is not provided",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error finding user",
      error: error,
    });
  }
};

export const courseController = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  deleteCourse,
};
