import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO} from "./actionTypes";

// 添加事项
export const addTodo = (todo) => ({
    type:ADD_TODO,
    data:todo
})

export const deleteTodo = (index) => ({
    type: REMOVE_TODO,
    data: index
})

export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    data: index
})