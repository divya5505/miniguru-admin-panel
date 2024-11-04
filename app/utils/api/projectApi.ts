import { apiClient } from './apiClient';
import { NotFoundError, ForbiddenError, ServiceError } from './error'; // Import custom error classes
import { Project, ProjectCategory } from '@/app/types/project';

// Get all projects
export const getAllProjects = async (): Promise<Project[]> => {
  try {
    const response = await apiClient.get('/project/all');
    return response.data.projects;
  } catch (error) {
    handleError(error);
  }
};

// Get a project by ID
export const getProjectById = async (projectId: string): Promise<Project> => {
  try {
    const response = await apiClient.get(`/project/${projectId}`);
    return response.data.project;
  } catch (error) {
    handleError(error);
  }
};

// Create a project category
export const createProjectCategory = async (name: string, icon: string): Promise<ProjectCategory> => {
  try {
    const response = await apiClient.post('/admin/project/category', { name, icon });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Update a project category
export const updateProjectCategory = async (categoryId: string, updates: Partial<ProjectCategory>): Promise<ProjectCategory> => {
  try {
    const response = await apiClient.put(`/admin/project/category/${categoryId}`, updates);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Delete a project category
export const deleteProjectCategory = async (categoryId: string): Promise<void> => {
  try {
    await apiClient.delete(`/admin/project/category/${categoryId}`);
    console.log(`Project category with ID ${categoryId} deleted successfully.`);
  } catch (error) {
    handleError(error);
  }
};

export const deleteProjectById = async (projectId: string): Promise<Project> => {
  try {
    const response = await apiClient.delete(`/admin/project/${projectId}`);
    return response.data.project;
  } catch (error) {
    handleError(error);
  }
};


// Error handling utility
const handleError = (error): never => {
  if (error.response) {
    switch (error.response.status) {
      case 404:
        throw new NotFoundError('Project not found');
      case 403:
        throw new ForbiddenError('Access is forbidden');
      default:
        throw new ServiceError('An unexpected error occurred');
    }
  }
  throw new ServiceError('An error occurred while processing the request');
};
