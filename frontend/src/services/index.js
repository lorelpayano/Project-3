import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "https://trureno.herokuapp.com/")
  : // ? (baseURL = 'window.location.origin')
    (baseURL = "http://localhost:5000");

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get("/is-logged-in");
  },
  signUp: async (user) => {
    return await service.post("/signup", user);
  },
  logIn: async (user) => {
    return await service.post("/login", user);
  },
  logOut: async () => {
    return await service.get("/logout");
  },
  toUpload: async (image) => {
    return await service.post("/toupload", image);
  },
  getProject: async () => {
    return await service.get("/projects");
  },
  getProjects: async (id) => {
    return await service.get(`/projects/${id}`);
  },
  createProject: async (item) => {
    return await service.post("/projects/new", item);
  },
  deleteProject: async (id) => {
    return await service.post(`projects/${id}/delete`);
  },
  editProject: async (data) => {
    return await service.post(`/projects/${data._id}/edit`, data);
  },
};

export default actions;
