import React from 'react';
import './App.css';
import LandingPage from './pages/landing'
import Routes from './pages/routes'
import { connect } from 'react-redux'

class App extends React.Component {

  render() {
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
    }
  })
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
