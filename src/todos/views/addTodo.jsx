import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {addTodo} from "../actions";

class AddTodo extends Component{

    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this)

        this.state = {
            value: ''
        }
    }

    onInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
        // console.log(this.state.value)
    }

    onKeyDown = (event) => {
        if (event.keyCode === 13){
            const inputValue = this.state.value
            if (!inputValue.trim()){
                return
            }

            this.props.onAdd(inputValue)
            console.log(inputValue)
            this.setState({value:''})
        }
    }

    render(){
        return (
            <header className="header">
                <h1>Todos</h1>
                <input className="new-todo" placeholder="你想干点啥？"
                       onChange={this.onInputChange} value={this.state.value}
                       onKeyDown={this.onKeyDown} autoFocus/>
            </header>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text))
        }
    }
}

export default connect(null,mapDispatchToProps)(AddTodo)