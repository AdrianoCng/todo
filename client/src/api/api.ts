import axios from "axios";

export default axios.create({
    baseURL: "http://ec2-18-133-79-56.eu-west-2.compute.amazonaws.com:5000",
    timeout: 10000,
});
