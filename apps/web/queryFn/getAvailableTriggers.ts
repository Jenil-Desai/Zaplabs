import axios from "axios";

export interface AvailableTrigger {
    id: string;
    name: string;
}

export async function getAvailableTrigger() {
    const response = await axios.get<AvailableTrigger[]>("/api/trigger/available");

    if (response.status !== 200) {
        throw new Error("Failed to fetch available triggers");
    }

    return response.data;
}