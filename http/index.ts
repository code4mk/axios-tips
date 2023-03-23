import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import handleError from './handle-error'

let token = '';

// Create an instance.
const myApiInstance: AxiosInstance = axios.create({
  baseURL: '',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});

// Response interceptor for handling errors and refreshing the token.
myApiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response);
  },
  async (error: AxiosError) => {
    let theError = handleError(error);
    return Promise.reject(theError);
  }
);


export { myApiInstance };
