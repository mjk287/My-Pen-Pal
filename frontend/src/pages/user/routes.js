import React from 'react'
import { Route, Switch} from 'react-router-dom'
import MePage from './index'

const UserRoutes = (props) => {
  return(
    <Switch>
      <Route
      exact
      path={`${props.match.url}/me`}
      render={() => <MePage/>}
      >
      </Route>
      <Route
      exact
      path={`${props.match.url}/edit`}
      render={() => <div>Edit page!</div>}
      >
      </Route>
      <Route
      path={`${props.match.url}/us`}
      render={() => <div>News Feed Page!</div>}
      >
      </Route>
    </Switch>
  )
}

export default UserRoutes
