import React from 'react'
import Login from '../../components/Login'
import Signup from '../../components/Signup'
import { Grid, Container } from 'semantic-ui-react'

class LandingPage extends React.Component {
  render(){
    return(
      <React.Fragment>
          <Grid verticalAlign='middle' centered relaxed divided id='landing-container'>
            <Grid.Row id='landing-form-container'>
              <Grid.Column width={8}>
                <Login />
              </Grid.Column>
              <Grid.Column width={8}>
                <Signup />
              </Grid.Column>
            </Grid.Row>
          </Grid>

      </React.Fragment>
    )
  }
}

export default LandingPage
