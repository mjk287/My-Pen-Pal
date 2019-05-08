import React from 'react'
import UserEditForm from '../../../components/UserEditForm'
import { connect } from 'react-redux'
import { patchUser } from '../../../Redux/actions'
import { Grid } from 'semantic-ui-react'

class EditPage extends React.Component {

  submitHandler = (e, userObj) => {
    e.preventDefault()

    const data = new FormData()
    Object.keys(userObj).forEach((key, value) => {
      if (!!userObj[key]) {
        data.append(key, userObj[key])
      }
    })

    this.props.patchUser(data, this.props.currentUser.id)

    alert('Profile Updated')
  }

  render(){
    return(
      <Grid verticalAlign='middle' centered id='edit-page-container'>
        <Grid.Row id='edit-form-container'>
          <Grid.Column>
            <UserEditForm submitHandler={this.submitHandler}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return (
    { patchUser: (data, id) => dispatch(patchUser(data, id)) }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)
