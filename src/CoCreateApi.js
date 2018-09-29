import axios from "axios";

const baseUrl = "/api/cocreate";

export function getAllSubmissions() {
  return axios.get(baseUrl);
}
