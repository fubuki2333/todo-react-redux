import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from "./todoItem";
import {connect} from "react-redux";
import {toggleTodo,removeTodo} from "../actions";
import {FilterTypes} from "../../constants";

const TodoList = ({todos,onToggleTodo,onRemoveTodo}) => {
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {
                    todos.map((item) => (
                        <TodoItem
                            key={item.id}
                            text={item.text}
                            completed={item.completed}
                            onToggle={() => onToggleTodo(item.id)}
                            onRemove={() => onRemoveTodo(item.id)}
                        />
                    ))
                }
            </ul>
        </section>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

const selectVisibleTodos = (todos,filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed)
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed)
        default:
            throw new Error('unsupported filter')
    }
}


const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state.todos,state.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (index) => {
            dispatch(toggleTodo(index))
        },
        onRemoveTodo: (index) => {
            dispatch(removeTodo(index))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)