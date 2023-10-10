import { z } from "zod";

// se encarga de validar que los datos sean correctos

export const registerSchema = z.object({
  
  name: z.string({
    required_error: "name is required",
  }),

  lastname: z.string({
    required_error: "lastname is required",
  }),
  
  username: z.string({
    required_error: "Username is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid Email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at lesta 6 characters",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid Email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at lesta 6 characters",
    }),
});
