import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  console.log("req", req);
  console.log(localStorage.getItem("token"));
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;
  }

  return req;
});

export const fetchPost = (id) => API.get(`/api/v1/contents/${id}`);
export const fetchPosts = (page) => API.get(`/api/v1/contents?page=${page}`);
export const fetchContentssBySearch = (searchQuery) => API.get(`/api/v1/contents/search?searchQuery=${searchQuery.search || "none"}`);
export const createPost = (newPost) => API.post(`/api/v1/contents`, newPost);
export const addContent = (content) => API.post(`/api/v1/contents/create`, content);
export const uploadThumbnail = (files) => API.post(`/api/v1/contents/uploadThumbnail`, files);
export const uploadVideo = (files) => API.post(`/api/v1/contents/uploadVideo`, files);
export const updatePost = (id, updatedPost) => API.patch(`/api/v1/contents/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/api/v1/contents/${id}`);
export const likePost = (id) => API.patch(`/api/v1/contents/${id}/likeContent`);
export const myContent = () => API.get(`/api/v1/contents/mycontent`);
export const comment = (value, id) => API.post(`/api/v1/contents/${id}/commentPost`, { data: value });
export const profile = (id) => API.get(`/api/v1/users/${id}`);
export const updateProfile = (id, updateProfile) => API.put(`/api/v1/users/${id}`, updateProfile);
export const uploadAvatar = (files) => API.post(`/api/v1/users/uploadProfilePicture`, files);
// export const comment = (value, id) => API.post(`/contents/${id}/commentPost`, { data: value });
export const getByCategory = (categories) => API.get(`/api/v1/contents/categories?categories=${categories}`);

//users
// export const signIn = (formData) => API.post(`/api/v1/auth/login`, formData);
export const signIn = (formData) => API.post(`/api/v1/auth/login2`, formData);
export const signUp = (formData) => API.post(`/api/v1/auth/register2`, formData);
