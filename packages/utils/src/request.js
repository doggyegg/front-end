import axios from "axios";
axios.defaults.baseURL = "https://test";

axios.interceptors.response.use((res) => {
  return res;
});

export default axios;
