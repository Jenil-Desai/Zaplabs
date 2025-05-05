import {Kafka} from "kafkajs";
import {TOPIC_NAME} from "@repo/constants";

const kafka = new Kafka({
    clientId: "outbox-processor",
    brokers: ["localhost:9092"],
})

async function main() {
    const consumer = kafka.consumer({groupId: "main-worker"});
    await consumer.connect();
    await consumer.subscribe({topic: TOPIC_NAME, fromBeginning: true});

    await consumer.run({
        autoCommit: false,
        eachMessage: async ({topic, partition, message}) => {
            console.log({topic, partition, message})

            await consumer.commitOffsets([{
                topic: TOPIC_NAME,
                partition: partition,
                offset: (parseInt(message.offset) + 1).toString(),
            }])
        }
    })
}

main();