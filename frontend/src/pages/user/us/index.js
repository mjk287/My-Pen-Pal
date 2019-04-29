import React from 'react'
import PostsContainer from '../../../components/PostsContainer'
import { connect } from 'react-redux'
import PenpalContainer from '../../../components/PenpalContainer'

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
        <h1>Penpal is on</h1>
        }
        <PenpalContainer />
        <PostsContainer posts={this.state.ourPosts}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(UsPage)
