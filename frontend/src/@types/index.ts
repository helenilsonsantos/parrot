// export interface Post {
//     id: number,
//     user_nome: string,
//     user_email: string,
//     user_apartamento: number,
//     comentario: string,
//     user_imagem: string
//     user_id: number
// }

export interface Post {
    id: number,
    nome: string,
    email: string,
    apartment: string,
    comentario: string
}

export interface SignIn {
    email: string,
    password: string
}

export interface User extends SignIn {
    id: number,
    nome: string,
    apartment: string,
    permission: Permission
}

export enum Permission {
    "Nothing",
    "User",
    "Admin"
}

export interface UserState {
    isLogged: boolean,
    accessToken: string,
    permission: Permission,
    id?: number,
    nome?: string,
    email?: string,
    apartamento?: number
    imagem?: string
}

export interface PostState {
    post: Post []
}
