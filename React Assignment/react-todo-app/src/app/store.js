import { configureStore } from "@reduxjs/toolkit";
import todoReducer  from "../features/todoList/todoList";

export const store = configureStore({
    reducer: {
        todosList : todoReducer
    }
})