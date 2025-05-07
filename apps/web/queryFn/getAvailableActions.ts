import axios from "axios";

export interface AvailableActions {
    id: string;
    name: string;
}

export async function getAvailableActions() {
    const response = await axios.get<AvailableActions[]>("/api/action/available");

    if (response.status !== 200) {
        throw new Error("Failed to fetch available actions");
    }

    return response.data;
}