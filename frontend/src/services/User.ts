import { baseUrl, baseUrlHeroku } from './config';

export interface NewUser {
    nome: string,
    email: string,
    apartament: string,
    admin: boolean
};


export const postAddUser = async ({nome, email, apartament, admin}: NewUser) => {
    try {
        const response = await baseUrl.post('/users', {nome, email, apartament, admin});
        return response.data;
    } catch (error) {
        throw new Error('Não foi possível enviar o formulário');
    }
};

// export const postAddUser = async ({nome, email, apartament, admin}: NewUser) => {
//     try {
//         const response = await baseUrlHeroku.post('/usuario/criar/', {nome, email, apartament, admin});
//         return response.data;
//     } catch (error) {
//         throw new Error('Não foi possível enviar o formulário');
//     }
// };