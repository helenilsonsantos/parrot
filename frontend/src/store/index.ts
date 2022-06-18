import { configureStore } from "@reduxjs/toolkit"

import usersSlice from "./users"

export const store = configureStore({
    reducer: {
        usersSlice
    },
})

export type RootStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;