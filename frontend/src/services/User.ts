import baseUrl from './config';

export interface NewUser {
    nome: string,
    email: string,
    apartment: string,
    admin: boolean
};


export const postAddUser = async ({nome, email, apartment, admin}: NewUser) => {
    try {
        const response = await baseUrl.post('/usuario/criar', {nome, email, apartment, admin});
        return response.data;
    } catch (error) {
        throw new Error('Não foi possível enviar o formulário');
    }
};