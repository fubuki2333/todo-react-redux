import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {setFilter} from "../actions";

const Link = ({active,children,onClick}) => (
    <a className={active ? 'selected' : ''} href="#/" onClick={(ev) => {
        ev.preventDefault()
        onClick()
    }}>{children}</a>
)

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state,ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
}

const mapDispatchToProps = (dispatch,ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Link)
