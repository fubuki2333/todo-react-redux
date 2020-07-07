import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO} from "./actionTypes";

let nextTodoId = 0

// 添加事项
export const addTodo = (text) => ({
    type:ADD_TODO,
    id: nextTodoId++,
    data: text
})

// 删除事项
export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    data: id
})

// 改变事项状态
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    data: id
})