import {z} from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid Email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6, {
        message: 'Password must be at lesta 6 characters'
    }),
});


export const loginSchema = z.object({
     email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid Email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6, {
        message: 'Password must be at lesta 6 characters'
    }),
});