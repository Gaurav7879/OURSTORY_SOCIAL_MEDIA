import axios from "axios";

const API = axios.create({ baseURL: "http://a4a3890232e5948989eefcccff788a5b-838011020.ap-south-1.elb.amazonaws.com:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const uploadImage = (data) => API.post("/upload/", data);
export const uploadPost = (data) => API.post("/posts", data);
