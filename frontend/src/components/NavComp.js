import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../Redux/actions'

const NavComp = (props) => {
  return(
    <nav>
      <NavLink to={props.currentUser ?  `/${props.currentUser.id}/us` : '/'}>Us</NavLink>
      <NavLink to={props.currentUser ?  `/${props.currentUser.id}/me` : '/'}>Me</NavLink>
      <NavLink to={props.currentUser ?  `/${props.currentUser.id}/edit` : '/'}>Edit</NavLink>
      <button onClick={props.handleLogOut}>Log Out</button>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return({
    handleLogOut: () => dispatch(logoutUser())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(NavComp)
