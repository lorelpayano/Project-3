import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  // ? (baseURL = 'https://sheltered-dawn-07708.herokuapp.com')
  ? (baseURL = 'window.location.origin')
  : (baseURL = 'http://localhost:5000');

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get('/is-logged-in')
  },
  signUp: async (user) => {
    return await service.post('/signup', user)
  },
  logIn: async (user) => {
    return await service.post('/login', user)
  },
  logOut: async () => {
    return await service.get('/logout')
  },
  toUpload: async (image) => {
    return await service.post('/toupload', image)
  },
  createBoard: async (board) => {
    return await service.post('/board/new', board)
  },
  getBoards: async () => {
    return await service.get('/board');
  },
  getBoard: async (id) => {
    return await service.get(`/board/${id}`)
  }
};

export default actions;
