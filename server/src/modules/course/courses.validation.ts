import { z } from "zod";

const courseValidationSchema = z.object({
  id: z.string(),
  course_name: z.string(),
  course_banner: z.string(),
  course_instructor: z.string(),
  instructor_image: z.string(),
  instructor_position: z.string(),
  batch: z.number(),
  seat: z.number(),
  duration: z.string(),
  course_start: z.string(),
  course_description: z.string(),
  // course_topic:
});

export const userValidation = {
  courseValidationSchema,
};
