import express from "express";
import {db,Prisma} from "@repo/db";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/hooks/catch/:userId/:zapId", async (req, res) => {
  const { userId, zapId } = req.params;
  const body = req.body;

   await db.$transaction(async (tx :  Prisma.TransactionClient) => {
        const run = await tx.zapRun.create({
            data: {
                zapId,
                metadata: body,
            }
        });

        await tx.zapRunOutbox.create({
            data: {
                zapRunId: run.id,
            }
        })
   });

   res.json({success: true});
});

app.listen(PORT, () => console.log(`[Server] Running on ${PORT}`));