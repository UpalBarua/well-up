import { TCourses } from "./courses.interface";
import { courses } from "./courses.model";

export const createCourseDb = async (user: TCourses) => {
  const result = await courses.create(user);
  return result;
};
export const getAllCoursesDb = async () => {
  const result = await courses.find();
  return result;
};
export const getSingleCourseDb = async (id: string) => {
  const result = await courses.findOne({ id });
  return result;
};
export const deleteCourseDb = async (id: string) => {
  const result = await courses.deleteOne({ id });
  return result;
};

export const courseServices = {
  createCourseDb,
  getAllCoursesDb,
  getSingleCourseDb,
  deleteCourseDb,
};
