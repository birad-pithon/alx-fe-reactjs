import axios from "axios";

const BASE_URL = "https://api.github.com/users";

/**
 * Fetch a GitHub user's data
 * @param {string} username 
 * @returns {Promise<object>}
 */

export async function fetchUserData({ username, location,minRepos}) {
  try {
    let query = [];
    if (username) querry.push(`${username} in:login`);
    if (location) querry.push(`location:${location}`);
    if (minRepos) querry.push(`repos:>=${minRepos}`);

    const headers = {};
    if (import.meta.env.VITE_APP_GITHUB_API_KEY) {
      headers.Authorization = `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`;
    }

    const response = await axios.get(
        `${BASE_URL}/${username}`, { headers }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
