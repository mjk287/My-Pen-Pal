import React from 'react'
import Login from '../../components/Login'
import Signup from '../../components/Signup'

class LandingPage extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Login />
        <Signup />
      </React.Fragment>
    )
  }
}

export default LandingPage
