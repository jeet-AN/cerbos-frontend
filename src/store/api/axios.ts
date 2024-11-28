import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;//process.env.VITE_APP_BASE_URL;

const getAuthToken = () => Cookies.get('main');

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const POST = async (endpoint: string, data: any) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    // console.error('Error in POST request:', error);
    throw error;
  }
};

export const GET = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    // console.error('Error in GET request:', error);
    throw error;
  }
};

export const PATCH = async (endpoint: string, data: any) => {
  try {
    const response = await api.patch(endpoint, data);
    return response.data;
  } catch (error) {
    // console.error('Error in PATCH request:', error);
    throw error;
  }
};

export const DELETE = async (endpoint: string) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    // console.error('Error in DELETE request:', error);
    throw error;
  }
};

export default api;
