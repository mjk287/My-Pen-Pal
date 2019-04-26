import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import UserRoutes from './user/routes'
import { connect } from 'react-redux'


class Routes extends React.Component {
  componentDidMount(){
    const { currentUser } = this.props
    const channel_ids = [currentUser.id, currentUser.my_penpal.id].sort()
    this.props.cable.subscriptions.create({channel: 'PenpalChannel', room: `${channel_ids[0]}_${channel_ids[1]}`}, {
      connected: () => {},
      disconnected: () => {},
      received: (data) => {
        if(data.isOnline){
          console.log('It worked')
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

export default connect(mapStateToProps)(Routes)
