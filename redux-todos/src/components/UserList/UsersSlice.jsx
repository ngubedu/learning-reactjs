import { createSlice } from "@reduxjs/toolkit";

export const usersListSlice = createSlice({
    name: "users",
    initialState:[],
    reducers:{
        addUser:(state,action) =>{
            state.push(action.payload);
        },
        deleteUser:(state,action) =>{
            const newUser = state.filter((user) =>user.id !== action.payload.id)
            return newUser
        }
    }
})
