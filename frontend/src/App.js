import React from 'react';
import './App.scss';
import LandingPage from './pages/landing'
import Routes from './pages/routes'
import { connect } from 'react-redux'
import { getCurrentUser } from './Redux/actions'
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
        {
          !!store.getState().currentUser.id ? <Routes /> : <LandingPage />
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return({

    getCurrentUser: () => dispatch(getCurrentUser())
  })
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
