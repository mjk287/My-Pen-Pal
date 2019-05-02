import React from 'react'
import { Container, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const MyImageContainer = (props) => {
  const handleClick = (e) => {
    e.preventDefault()
    props.history.push(`/${props.currentUser.id}/edit`)
  }

  return(
    <React.Fragment>
    { !!props.currentUser.image ?
      <Container className='photo-frame'>
        <Image centered className='my-profile-imgs' id='top-filler-space' src={`http://localhost:3000/${props.currentUser.image}`}/>
      </Container>
      :
      <Container className='photo-frame'>
        <p className='upload-image-plz'>upload an image in your <a onClick={handleClick}>"Edit"</a> page</p>
        <Image centered className='my-profile-imgs no-border' id='top-filler-space' src={require('../assets/semanticFinal.gif')} />
      </Container>
      }
    </React.Fragment>

  )
}

const mapStateToProps = (state) => {
  return state
}

export default withRouter(connect(mapStateToProps)(MyImageContainer))
