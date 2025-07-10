import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      message: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
