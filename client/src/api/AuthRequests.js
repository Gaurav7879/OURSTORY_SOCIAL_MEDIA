import axios from 'axios'


const API = axios.create({ baseURL: 'http://a4a3890232e5948989eefcccff788a5b-838011020.ap-south-1.elb.amazonaws.com:5000' });

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);
