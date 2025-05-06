import * as z from "zod";

export const registerSchema = z.object({
    name: z.string().min(2, {message: "Name is required"}),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"}),
    acceptTerms: z.boolean({message: "You must accept the terms and conditions"}),
});

export type RegisterSchema = z.infer<typeof registerSchema>;