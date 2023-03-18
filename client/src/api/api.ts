import axios from "axios";

const baseURL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:5000/api/v1"
        : "https://todo-app-123.herokuapp.com";

export default axios.create({
    baseURL,
    timeout: 1000,
});
