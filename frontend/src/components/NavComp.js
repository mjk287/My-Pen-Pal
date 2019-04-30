import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../Redux/actions'
import { Menu } from 'semantic-ui-react'

const NavComp = (props) => {

  return(
    <Menu pointing secondary>
      <Menu.Item header as={NavLink} to={props.currentUser ?  `/${props.currentUser.id}/us` : '/'} children='Us' />
      <Menu.Item header as={NavLink} to={props.currentUser ?  `/${props.currentUser.id}/me` : '/'} children='Me' />
      <Menu.Item header as={NavLink} to={props.currentUser ?  `/${props.currentUser.id}/edit` : '/'} children='Edit' />
      <Menu.Menu position='right'>
        <Menu.Item onClick={props.handleLogOut} children='Log Out'/>
      </Menu.Menu>
    </Menu>
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
