import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.195:3000',
});

export const api = instance;
