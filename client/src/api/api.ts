import axios from "axios";

export default axios.create({
    baseURL: "https://todo-app-123.herokuapp.com",
    timeout: 1000,
});
