import React from 'react'
import { connect } from 'react-redux'
import { Image, Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const OurImageContainer = (props) => {
  const handleClick = (e) => {
    e.preventDefault()
    props.history.push(`/${props.currentUser.id}/edit`)
  }

  return(
      <Grid columns={2} relaxed divided className='shadow-box' id='top-filler-space'>
        <Grid.Column >
          { !!props.currentUser.image ?
              <Image centered className='our-profile-imgs' src={`http://localhost:3000/${props.currentUser.image}`} />
              :
              <React.Fragment>
                <p className='upload-image-plz'>upload an image in your <span onClick={handleClick}>"Edit"</span> page</p>
                <Image centered className='our-profile-imgs' src={require('../assets/semanticFinal.gif')} />

              </React.Fragment>
           }

        </Grid.Column>
        <Grid.Column >
          { !!props.currentUser.my_penpal && !!props.currentUser.my_penpal.image ?
          <Image centered className='our-profile-imgs' src={`http://localhost:3000/${props.currentUser.my_penpal.image}`} />
          :
          <React.Fragment>
          <p className='upload-image-plz'>your lazy partner hasn't uploaded an image yet</p>
            <Image centered className='our-profile-imgs' src={require('../assets/semanticFinal.gif')} />
          </React.Fragment>
          }
        </Grid.Column>

      </Grid>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default withRouter(connect(mapStateToProps)(OurImageContainer))
