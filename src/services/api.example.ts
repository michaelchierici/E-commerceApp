import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://yourIP:3000',
});
export const api = instance;
