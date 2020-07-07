import React,{Component} from 'react'

import {FilterTypes} from "../../constants";
import Link from "./link";

export default class Filters extends Component{
    render(){
        return (
            <footer className="footer">
                <span className="todo-count"><strong>0</strong> 项未完成</span>
                <ul className="filters">
                    <li>
                        <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
                    </li>
                    <li>
                        <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
                    </li>
                    <li>
                        <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
                    </li>
                </ul>
                <button className="clear-completed">清空已完成</button>
            </footer>
        )
    }
}

// Filters.componentDidMount()