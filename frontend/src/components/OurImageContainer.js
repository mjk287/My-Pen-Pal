import React from 'react'
import { connect } from 'react-redux'
import { Image, Divider, Segment, Grid } from 'semantic-ui-react'

const OurImageContainer = (props) => {
  console.log(props.currentUser)
  return(
      <Grid columns={2} relaxed divided className='shadow-box' id='top-filler-space'>
        <Grid.Column>
          <Image className='our-profile-imgs' src={`http://localhost:3000/${props.currentUser.image}`} />
        </Grid.Column>
        <Grid.Column>
          <Image className='our-profile-imgs' src={`http://localhost:3000/${props.currentUser.my_penpal.image}`} />
        </Grid.Column>

      </Grid>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(OurImageContainer)
