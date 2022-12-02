import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApis from '../../apis/userApis'

export const usersListSlice = createSlice({
    name: "users",
    initialState:{
        users: [],
    },
    reducers:{
        // addUser:(state,action) =>{
        //     state.push(action.payload);
        // },
        // deleteUser:(state,action) =>{
        //   const itemId = action.payload
        //   state.users = state.users.filter((item) => item.id !== itemId)
        //   console.log(action);
        // }
    },

    extraReducers: (builder) => {
      // get api
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
          state.users = action.payload;
        });
        // add
        builder.addCase(addNewUser.fulfilled, (state, action) => {
          state.users.push(action.payload);
        });
        // delete
        builder.addCase(deleteUser.fulfilled, (state, action) => {
          const itemId = action.payload
           state.users = state.users.filter((item) => item.id !== itemId)
        });
        // update
        builder.addCase(updateUser.fulfilled, (state, action) => {
          const newUserUpdate = action.payload
          const userID = state.users = state.users.find((item) => item.id !== newUserUpdate.id)
          if (userID >= 0) {
            state[userID] = newUserUpdate;
          }
        });
      },
})

export const fetchUsers = createAsyncThunk('users/fetchUsers' , async () =>{
    const res = await userApis.getAll();
    const users = res.data;
    return users;
});

export const addNewUser = createAsyncThunk(
    'users/addNewUser',
    async (newUser) => {
      const res = await userApis.add(newUser);
      return res.data;
    }
);

export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async (userID) => {
      const res = await userApis.delete(userID);
      return res.data;
    }
);
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (user) => {
    const res = await userApis.update(user);
    return res.data;
  }
);