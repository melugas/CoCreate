import axios from "axios";

//baseUrl =

export function getAllSubmissions() {
  return axios.get("/api/cocreate");
}
