import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}`,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
api.interceptors.request.use((config: any) => {
  const keyLocal = `${import.meta.env.VITE_APP_NAME}`;

  const localStorageItem = window.localStorage.getItem(keyLocal) || '{}';

  const { user } = JSON.parse(localStorageItem);

  if (user && user.token && user.token.accessToken)
    config.headers.Authorization = `Bearer ${user.token.accessToken}`;

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const keyLocal = `${import.meta.env.VITE_APP_NAME}`;
    const localStorageItem = window.localStorage.getItem(keyLocal) || '{}';

    const { user } = JSON.parse(localStorageItem);
    if (
      error.response &&
      error.response.status &&
      error.response.status === 401 &&
      user &&
      user.token &&
      user.token.accessToken
    ) {
      window.localStorage.removeItem(keyLocal);
      window.location.reload();
      return;
    }
    return Promise.reject(error);
  },
);

export default api;
