import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import UserRoutes from './user/routes'
import { connect } from 'react-redux'

const Routes = (props) => {
  return(
    <Switch>
      <Route
      exact
      path='/'
      render={() => <Redirect to={`/${props.currentUser.id}/me`}/>}
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

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Routes)
