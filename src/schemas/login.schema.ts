import { z } from "zod";

export const loginSchema = z
  .object({
    email: z
      .string({
        message: "Email is required",
      })
      .email({
        message: "Incorrect format of email",
      }),
    password: z
      .string({
        message: "Password is required",
      })
      .min(1, {
        message: "Password is required",
      }),
  })
  .strict();

export type LoginSchema = z.infer<typeof loginSchema>;
