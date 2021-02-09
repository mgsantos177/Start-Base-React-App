/* eslint-disable no-empty */
import axios from 'axios';

import { signOut } from '../store/modules/auth/actions';

const api = axios.create({
  baseURL: process.env.REACT_APP_BFF,
});

api.registerInterceptWithStore = store => {
  api.interceptors.response.use(
    response => {
      if (response.status === 401) {
      }
      return response;
    },
    error => {
      if (error.response.data.error === 'Token invalido') {
        store.dispatch(signOut());
      }
    }
  );
};

export default api;
