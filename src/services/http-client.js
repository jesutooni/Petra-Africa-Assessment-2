import axios from "axios";

export default axios.create({
  baseURL: "https://petra-dev-api.herokuapp.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer sk_test_H7w7MvJyI7gHFBeCEvpktRcj7LRnyV84",
  },
});
