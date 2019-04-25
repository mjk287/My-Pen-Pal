import React from 'react'
import UserEditForm from '../../../components/UserEditForm'
import { connect } from 'react-redux'
import { patchUser } from '../../../Redux/actions'

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
  }

  render(){
    return(
      <UserEditForm submitHandler={this.submitHandler}/>
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
