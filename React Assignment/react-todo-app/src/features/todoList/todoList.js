import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lists : JSON.parse(localStorage.getItem("myTodoList")) || [],
    updateItem : -1,
    searchItem : ""
}

export const todoList = createSlice({
    name : "todosList",
    initialState,
    reducers : {
        addInTodoList : (state,action) => {
            state.lists.push(action.payload);
        },
        updateTodoList : (state,action) => {
            state.lists = action.payload;
        },
        deleteAllListItems : (state) => {
            state.lists = [];
        },
        setUpdateItem : (state,action) => {
            state.updateItem = action.payload;
        },
        setSearchItem : (state,action) => {
            state.searchItem = action.payload;
        }
    }
})

export const { addInTodoList, updateTodoList, deleteAllListItems, setUpdateItem, setSearchItem } = todoList.actions;
export default todoList.reducer;