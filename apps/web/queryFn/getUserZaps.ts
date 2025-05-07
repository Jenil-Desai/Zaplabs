import axios from "axios";

export interface Zap {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    active: string;
    actionCount: number;
    zapRunCount: number;
}

export async function getUserZaps() {
    const response = await axios.get<Zap[]>("/api/zaps");

    if (response.status !== 200) {
        throw new Error("Failed to fetch user zaps");
    }

    return response.data;
}