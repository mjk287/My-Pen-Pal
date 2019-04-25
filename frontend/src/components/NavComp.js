import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const NavComp = (props) => {
  return(
    <nav>
      <NavLink to={props.currentUser ?  `/${props.currentUser.id}/us` : '/'}>Us</NavLink>
      <NavLink to={props.currentUser ?  `/${props.currentUser.id}/me` : '/'}>Me</NavLink>
      <NavLink to={props.currentUser ?  `/${props.currentUser.id}/edit` : '/'}>Edit</NavLink>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(NavComp)
