// pages/api/fetch-data.js
import axios from "axios";

export default async function handler(req, res) {
  const url = "http://localhost:3001/assets/resources"; 
  const response = await axios.get(url);

  return res.status(200).json(response.data);
}
