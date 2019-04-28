import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import UserRoutes from './user/routes'
import { connect } from 'react-redux'
import { gotOnline } from '../Redux/actions'


class Routes extends React.Component {

  componentDidMount(){
    const { currentUser } = this.props
    const channel_ids = [currentUser.id, currentUser.my_penpal.id].sort()
    this.props.cable.subscriptions.create({channel: 'PenpalChannel', room: `${currentUser.id}`}, {
      connected: () => {},
      disconnected: () => {},
      received: (data) => {
        switch(data.event){
          case 'appear':
            console.log('hit appear')
            this.props.gotOnline()
          default:
            return null
        }
      }
    })
  }

  render(){
    return(
      <Switch>
        <Route
        exact
        path='/'
        render={() => <Redirect to={`/${this.props.currentUser.id}/me`}/>}
        >
        </Route>
        <Route
        path='/:id'
        render={({match}) => <UserRoutes match={match} />}
        >
        </Route>
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return ({
    gotOnline: () => dispatch(gotOnline())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
