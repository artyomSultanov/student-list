import axios from "axios";

export const $api = axios.create({
  baseURL: "https://front-assignment-api.2tapp.cc/api",
  headers: {
    "Content-Type": "application/json",
  },
});
