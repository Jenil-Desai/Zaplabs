import axios from "axios";

export type UserProfile = {
    name: string;
    email: string;
    createdAt: string;
}

export async function getUserProfile() {
    const response = await axios.get<UserProfile>("/api/user/profile");

    if (response.status !== 200) {
        throw new Error("Failed to fetch user profile");
    }

    return response.data;
}