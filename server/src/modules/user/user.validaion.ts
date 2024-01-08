import { z } from "zod";

const userValidationSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  image: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
});

export const userValidation = {
  userValidationSchema,
};
