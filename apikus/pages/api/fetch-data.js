// pages/api/fetch-data.js
import axios from "axios";

export default async function handler(req, res) {
  const url = "https://apikuslabs.com/assets/resources.json"; // Replace with the external API URL
  const response = await axios.get(url);

  return res.status(200).json(response.data);
}
