import axios from 'axios';

export const httpRequest = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'mock-api' : 'api',
});
