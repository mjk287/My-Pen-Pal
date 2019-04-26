import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import UserRoutes from './user/routes'
import { connect } from 'react-redux'


class Routes extends React.Component {

  render(){
    console.log(this.props.currentUser.my_penpal)
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
