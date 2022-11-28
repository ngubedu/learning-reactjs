import { configureStore } from "@reduxjs/toolkit";
import { foodsListSlice } from "../components/Food/FoodList/FoodsSlice";

const store = configureStore({
  reducer: {
    todoList: foodsListSlice.reducer,
  },
});

export default store;
