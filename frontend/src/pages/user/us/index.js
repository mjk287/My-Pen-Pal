import React from 'react'
import PostsContainer from '../../../components/PostsContainer'
import { connect } from 'react-redux'
import PenpalContainer from '../../../components/PenpalContainer'
import { Grid } from 'semantic-ui-react'
import OurImageContainer from '../../../components/OurImageContainer'

class UsPage extends React.Component{

  state = {
    ourPosts: []
  }

  componentDidMount(){

    fetch(`http://localhost:3000/api/v1/our_posts/${this.props.currentUser.id}`)
    .then(resp => resp.json())
    .then(posts => {
      this.setState({
        ourPosts: posts.reverse()
      })
    })
  }

  render(){
    return(
      <React.Fragment>
      { this.props.currentUser.my_penpal.online &&
      <div className='overlay-gradient'>
        <audio src={`http://localhost:3000/${this.props.currentUser.my_penpal.song}`} autoPlay></audio>
      </div>

      }
        <Grid relaxed>

          <Grid.Row>
            <Grid.Column width={4}>
            </Grid.Column>

            <Grid.Column width={8}>
              <OurImageContainer />
              <PostsContainer posts={this.state.ourPosts}/>
            </Grid.Column>

            <Grid.Column width={4} className='center-things' id='penpal-column'>

              <PenpalContainer />
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(UsPage)
