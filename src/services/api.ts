
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Posts API
export const fetchPosts = () => API.get('/posts');
export const fetchUserPosts = (userId: string) => API.get(`/posts/user/${userId}`);
export const createPost = (postData: any) => API.post('/posts', postData);
export const likePost = (id: string, userId: string) => API.patch(`/posts/${id}/like`, { userId });

// Users API
export const fetchUsers = () => API.get('/users');
export const fetchUser = (id: string) => API.get(`/users/${id}`);
export const fetchCurrentUser = () => API.get('/users/me');
