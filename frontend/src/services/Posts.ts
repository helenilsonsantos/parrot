import { baseUrl as api, baseUrlHeroku } from './config';
import { Post, User } from '../@types';

export const renderPosts = (): Promise<Post[]> => {
    return api.get<Post[]>("/posts").then(response => response.data);
}

export const addMessage = async (post: Omit<Post, "id">) => {
    try{
        const response = await api.post("/posts", post)
        return response.data;
    } catch(error: any) {
        alert(`Error: ${error.response.data}`)
    }
}
