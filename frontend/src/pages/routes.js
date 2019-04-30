import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import UserRoutes from './user/routes'
import { connect } from 'react-redux'
import { gotOnline, gotMessage, gotOffline } from '../Redux/actions'


class Routes extends React.Component {

  componentDidMount(){
    const { currentUser } = this.props

    this.props.cable.subscriptions.create({channel: 'PenpalChannel', room: `${currentUser.id}`}, {
      connected: () => {},
      disconnected: () => {
        this.props.gotOffline()
      },
      received: (data) => {
        switch(data.event){
          case 'appear':
            this.props.gotOnline()
            break;
          case 'disappear':
            this.props.gotOffline()
            break;
          case 'message':
            this.props.gotMessage(data.content)
            break;
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
    gotOnline: () => dispatch(gotOnline()),
    gotMessage: (content) => dispatch(gotMessage(content)),
    gotOffline: () => dispatch(gotOffline())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
