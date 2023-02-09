import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:3333/api",
});

apiInstance.defaults.headers.common["Content-Type"] = "application/json";

export default apiInstance;
