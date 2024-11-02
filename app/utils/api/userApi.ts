import { apiClient } from './apiClient';
import { User } from '@/app/types/users';

export const fetchUserDetails = async (userId: string): Promise<User> => {
  try {
    const response = await apiClient.get(`/admin/users/${userId}`);
    return response.data.user;
  } catch (error) {
    throw error; // Re-throw error to be caught by caller
  }
};

export const updateUserDetails = async (userId: string, updates: Partial<User>): Promise<User> => {
    try {
        const response = await apiClient.put(`/admin/users/${userId}`, updates);
        return response.data;
    } catch (error) {
        throw error;
    }
};
    
export const listUsers = async (): Promise<User> => {
  try {
    const response = await apiClient.get(`/admin/users/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};