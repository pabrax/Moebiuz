import { z } from "zod";

// se encarga de validar que los datos sean correctos

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description must be a string",
  }),
  date: z.string().datetime().optional(),
  status: z.string({
    required_error: "status is required",
  }),
});
