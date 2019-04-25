import React from 'react'
import PostsContainer from '../../../components/PostsContainer'
import { connect } from 'react-redux'

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
      <PostsContainer posts={this.state.ourPosts}/>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(UsPage)
