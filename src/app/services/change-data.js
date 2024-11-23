

import { getAuthToken } from "./get-token";

export async function changeData(method, path, payload) {
    const baseUrl = "http://localhost:1337";
    const authToken = await getAuthToken();
    const url = new URL(path, baseUrl);

    if (!authToken) throw new Error("No auth token found");

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({ ...payload }),
        });

        if (method === 'DELETE') {
            return response.ok;
        }

        const data = await response?.json();
        return data;
    } catch (error) {
        console.log("error", error);
        throw error;
    }
}