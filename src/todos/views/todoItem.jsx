import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({onToggle,onRemove,completed,text}) => {
    const checkedProp = completed ? {checked:true} : {}
    return (
        <li className={completed ? 'completed' : ''}>
            <div className="view">
                <input className="toggle" type="checkbox" {...checkedProp}
                    onClick={onToggle} readOnly />
                <label>{text}</label>
                <button className="destroy" onClick={onRemove}></button>
            </div>
            {/*<input className="edit" value="Rule the web"/>*/}
        </li>
    )
}

TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem