import React,{Component} from 'react'
import TodoItem from "./todoItem";

export default class TodoList extends Component{
    render(){
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    <TodoItem />
                    <li className="completed">
                        <div className="view">
                            <input className="toggle" type="checkbox" checked/>
                            <label>吃饭</label>
                            <button className="destroy"></button>
                        </div>
                        <input className="edit" value="Create a TodoMVC template"/>
                    </li>
                    <li>
                        <div className="view">
                            <input className="toggle" type="checkbox"/>
                            <label>睡觉</label>
                            <button className="destroy"></button>
                        </div>
                        <input className="edit" value="Rule the web"/>
                    </li>
                </ul>
            </section>
        )
    }
}