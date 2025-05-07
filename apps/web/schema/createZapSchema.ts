import * as z from "zod";

export const createZapSchema = z.object({
    name: z.string().min(1, "Zap name is required"),
    triggerId: z.string().min(1, "Trigger ID is required"),
    actions: z.array(
        z.object({
            actionId: z.string().min(1, "Action ID is required"),
            order: z.number().int().min(0, "Order must be a non-negative integer"),
        })
    ),
});

export type CreateZapSchema = z.infer<typeof createZapSchema>;