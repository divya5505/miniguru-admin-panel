import axios from 'axios';
import { UnauthorizedError } from './error';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '';
let accessToken = '';
let refreshToken = '';

export const login = async (email: string, password: string): Promise<void> => {
  try {
    const response = await axios.post(`${baseURL}/auth/login`, { email, password });
    accessToken = response.data.accessToken;
    refreshToken = response.data.refreshToken;
  } catch (error: any) {
    throw new UnauthorizedError('Invalid credentials');
  }
};

export const refreshAccessToken = async (): Promise<void> => {
  try {
    const response = await axios.post(`${baseURL}/auth/refresh-token`, { refreshToken });
    accessToken = response.data.accessToken;
  } catch (error: any) {
    throw new UnauthorizedError('Failed to refresh token');
  }
};

// Function to get the current access token
export const getAccessToken = (): string => accessToken;
