import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const fetchData = async () => {
  try {
    const response = await api.get("/assets/resources");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
    console.log("Response Type:", typeof response.data);
    console.log("Response:", response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
