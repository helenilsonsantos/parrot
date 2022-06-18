import { baseUrl as api, baseUrlHeroku } from './config';
import { SignIn, User } from '../@types';

// export interface NewUser {
//     nome: string,
//     email: string,
//     apartament: string,
//     password: string,
//     admin: boolean
// };


export const addUser = async (user: Omit<User, "id">) => {
    try {
        const response = await api.post('/users', user);
        return response.data;
    } catch (error) {
        throw new Error('Não foi possível enviar o formulário');
    }
};

export const signInUser = async (payload: SignIn) => {
    try {
        const response = await api.post("/signin", payload);
        return response.data; 
    } catch (error: any) {
        alert (`Error: ${error.response.data}`)
    }
}

// export const postAddUser = async ({nome, email, apartament, admin}: NewUser) => {
//     try {
//         const response = await baseUrlHeroku.post('/usuario/criar/', {nome, email, apartament, admin});
//         return response.data;
//     } catch (error) {
//         throw new Error('Não foi possível enviar o formulário');
//     }
// };