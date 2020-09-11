import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    return axios.create({
      baseURL: "http://192.168.99.100",
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: "/",
    });
  }
};

export default buildClient;
