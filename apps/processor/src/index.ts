import {db} from "@repo/db";
import {Kafka} from "kafkajs";
import {TOPIC_NAME} from "@repo/constants";

const kafka = new Kafka({
    clientId: "outbox-processor",
    brokers: ["localhost:9092"],
})

async function main() {
    const producer = kafka.producer();
    await producer.connect();

    while (1) {
        const pendingZaps = await db.zapRunOutbox.findMany({
            where: {},
            take: 10,
        })

        await producer.send({
            topic: TOPIC_NAME,
            messages: pendingZaps.map(zap => ({value: zap.zapRunId}))
        })

        await db.zapRunOutbox.deleteMany({
            where: {
                id: {
                    in: pendingZaps.map(zap => zap.id)
                }
            }
        })
    }
}
main();