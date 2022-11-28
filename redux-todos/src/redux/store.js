import { configureStore } from "@reduxjs/toolkit";
import { usersListSlice } from "../components/UserList/UsersSlice";

export const store = configureStore({
  reducer: {
    userList: usersListSlice.reducer,
  },
});
