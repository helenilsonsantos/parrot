import { createSlice } from "@reduxjs/toolkit"
import { Permission, UserState } from "../../@types"

const initialState: UserState = {
    isLogged: false,
    accessToken: "",
    permission: Permission.Nothing,
    id: undefined,
    nome: undefined,
    email: undefined,
    apartamento: undefined
}

const userReduce = createSlice({
    name: "@user",
    initialState,
    reducers:{
        logIn(state, action){
            Object.assign(state, {
                isLogged: true,
                accessToken: action.payload.accessToken,
                permission: Permission[action.payload.permission],
                id: action.payload.user.id,
                nome: action.payload.user.nome,
                email: action.payload.user.email,
                apartamento: action.payload.user.apartamento
            })
        },
        logOut(state){
            Object.assign(state, initialState)
        }
    }
})

export const { logIn, logOut } = userReduce.actions

export default userReduce.reducer;