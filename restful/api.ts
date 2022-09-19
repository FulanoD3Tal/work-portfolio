import axios, { AxiosError } from 'axios';
import { API_URL } from '../config/env';

/**
 * Create a new instance of Axios
 *
 * @version 1.0.0
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
const api = axios.create({
  baseURL: API_URL,
});
export default api;
/**
 * Set a new authentication token for the instance
 *
 * @param {string} token token
 * @version 1.1.0
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
const setAuthToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

/**
 * Type than encapsule all type than errors than axios can throw
 */
export type TError = Error | AxiosError | null;

/**
 * handle all type and variants of error throw by the system
 *
 * @version 1.3.0
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
const handleError = (error: TError) => {
  if (axios.isAxiosError(error)) {
    if (error?.response) {
      // Success response but not 200
      // @ts-ignore
      if (error.response.data.message) {
        // @ts-ignore
        return error.response.data.message;
      }
      return error.message;
    }
    if (error.request) {
      // No server response
      return 'Sin respuesta del servidor';
    }
    // Internal error, posible before hit the api
    return error?.message;
  }
  return error?.message;
};

export { setAuthToken, handleError };
