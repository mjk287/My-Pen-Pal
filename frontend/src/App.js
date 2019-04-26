import React from 'react';
import './App.css';
import LandingPage from './pages/landing'
import Routes from './pages/routes'
import { connect } from 'react-redux'
import { getCurrentUser, logoutUser } from './Redux/actions'
import NavComp from './components/NavComp'
import { store } from './index.js'

class App extends React.Component {

  componentDidMount() {
    if(localStorage.getItem('token')){
      this.props.getCurrentUser()
    }
  }

  render() {
    return (
      <div className="App">
        <NavComp />
        <button onClick={this.props.handleLogOut}>Log Out</button>
        {
          !!store.getState().currentUser.id ? <Routes /> : <LandingPage /> }

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return({
    handleLogOut: () => dispatch(logoutUser()),
    getCurrentUser: () => dispatch(getCurrentUser())
  })
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
