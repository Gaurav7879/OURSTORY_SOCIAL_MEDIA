import axios from 'axios'


const API = axios.create({ baseURL: 'http://a4a3890232e5948989eefcccff788a5b-838011020.ap-south-1.elb.amazonaws.com:5000' });

export const createChat = (data) => API.post('/chat/', data);

export const userChats = (id) => API.get(`/chat/${id}`);

export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`);
