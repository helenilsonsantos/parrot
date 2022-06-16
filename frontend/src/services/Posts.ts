import { baseUrl, baseUrlHeroku } from './config';
import { Post } from '../@types';

export const renderPosts = (): Promise<Post[]> => {
    return baseUrl.get<Post[]>("/posts").then(response => response.data);
}

export interface User {
    idUser: number,
    nome: string,
    email: string,
    apartament: string,
    admin: boolean
}

export const renderUsers = (): Promise<User[]> => {
    return baseUrlHeroku.get<User[]>("/usuario/lista").then(response => response.data);
}