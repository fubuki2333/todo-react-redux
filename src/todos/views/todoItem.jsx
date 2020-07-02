import React,{Component} from 'react'

export default class TodoItem extends Component{
    render(){
        return (
            <li>
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label>测试</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" value="Rule the web"/>
            </li>
        )
    }
}