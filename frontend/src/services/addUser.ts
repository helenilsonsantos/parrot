import axios from 'axios';

export interface NewUser {
    nome: string,
    email: string,
    senha: string,
    unidadeApt: string,
    foto: string
};

const baseUrl = axios.create({
    baseURL: 'http://localhost:3333'
});


export const postAddUser = async ({nome, email, senha, unidadeApt, foto}: NewUser) => {
    try {
        const response = await baseUrl.post('/user', {nome, email, senha, unidadeApt, foto});
        return response.data;
    } catch (error) {
        throw new Error('Não foi possível enviar o formulário');
    }
};