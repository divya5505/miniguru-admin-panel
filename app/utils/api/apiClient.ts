import axios, { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosHeaders } from 'axios';
import { refreshAccessToken, getAccessToken } from './auth';
import { NotFoundError, ServiceError, UnauthorizedError, ForbiddenError } from './error';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(async (config: InternalAxiosRequestConfig<any>) => {
  const token = getAccessToken();

  // Ensure headers exist and are properly typed
  if (!config.headers) {
    config.headers = {} as AxiosHeaders;
  }

  if (token) {
    // Use type assertion for compatibility
    (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
  }

  return config;
});