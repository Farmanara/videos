import axios from "axios";

const KEY = "AIzaSyBEtUEl8KJ4s9oFPARQVT1l5NQshwOP5ks";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",

    maxResults: 5,
    key: KEY
  }
});
