import axios from "axios";

// const baseURL = process.env.REACT_APP_SERVER_BASE_URL;
const baseURL = "http://localhost:5000";
// const apiUrl = `${baseURL}/api`;
const apiUrl = `https://catfact.ninja/fact`;

const client = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchInitData = async () => {
  const response = await client.get("/");
  return response.data;
};

