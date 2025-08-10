import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export async function fetchUserData(username) {
  try {
    const headers = {};
    if (import.meta.env.VITE_APP_GITHUB_API_KEY) {
      headers.Authorization = `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`;
    }

    const response = await axios.get(`${BASE_URL}/${username}`, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
}
