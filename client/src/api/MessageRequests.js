import axios from 'axios'


const API = axios.create({ baseURL: 'http://a4a3890232e5948989eefcccff788a5b-838011020.ap-south-1.elb.amazonaws.com:5000' });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);
