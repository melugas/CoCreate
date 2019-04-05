import axios from "axios";

const baseUrl = "/api/cocreate";

export function getAllSubmissions() {
  return axios.get(baseUrl);
}

export function getSubmissionById(id) {
  return axios.get(`${baseUrl}/${id}`, {
    id
  });
}

export function postSubmission(title, description, image) {
  const payload = {
    title,
    description,
    image
  };
  return axios.post(`${baseUrl}`, payload);
}

export function putSubmission(id, title, description, image) {
  const payload = {
    id,
    title,
    description,
    image
  };
  return axios.put(`${baseUrl}/${id}`, payload);
}

export function deleteSubmission(id) {
  return axios.delete(`${baseUrl}/${id}`);
}
