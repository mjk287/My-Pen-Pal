import React from 'react'
import PostsContainer from '../../../components/PostsContainer'
import { connect } from 'react-redux'

class MePage extends React.Component {

  state = {
    myPosts: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/my_posts/${this.props.currentUser.id}`)
    .then(res => res.json())
    .then(posts => {
      this.setState({
        myPosts: posts
      })
    })
  }

  render(){
    return(
      <PostsContainer posts={this.state.myPosts} />
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(MePage)
