import React from 'react';
import './App.css';
import LandingPage from './pages/landing'
import Routes from './pages/routes'
import { connect } from 'react-redux'
import { getCurrentUser } from './Redux/actions'

class App extends React.Component {

  componentDidMount() {
    if(localStorage.getItem('token')){
      this.props.getCurrentUser()
    }
  }

  render() {
    console.log(this.props.currentUser)
    console.log(localStorage.getItem('token'))
    return (
      <div className="App">
        <button onClick={this.props.handleLogOut}>Log Out</button>
        { !!this.props.currentUser.id ? <Routes /> : <LandingPage /> }

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return({
    handleLogOut: () => {
      localStorage.removeItem("token")
      dispatch({type: 'LOGOUT'})
    },
    getCurrentUser: () => dispatch(getCurrentUser())
  })
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
