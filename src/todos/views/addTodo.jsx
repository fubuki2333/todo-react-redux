import React,{Component} from 'react'

export default class AddTodo extends Component{
    render(){
        return (
            <header className="header">
                <h1>Todos</h1>
                <input className="new-todo" placeholder="你想干点啥？" autoFocus/>
            </header>
        )
    }
}