import React from 'react'
import { Container, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

const MyImageContainer = (props) => {
  return(
    <Container className='photo-frame'>
      <Image centered className='my-profile-imgs' id='top-filler-space' src={`http://localhost:3000/${props.currentUser.image}`} />
    </Container>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(MyImageContainer)
