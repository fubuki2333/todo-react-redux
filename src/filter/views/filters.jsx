import React,{Component} from 'react'

export default class Filters extends Component{
    render(){
        return (
            <footer className="footer">
                <span className="todo-count"><strong>0</strong> 项未完成</span>
                <ul className="filters">
                    <li>
                        <a className="selected" href="#/">全部</a>
                    </li>
                    <li>
                        <a href="#/active">未完成</a>
                    </li>
                    <li>
                        <a href="#/completed">已完成</a>
                    </li>
                </ul>
                <button className="clear-completed">清空已完成</button>
            </footer>
        )
    }
}