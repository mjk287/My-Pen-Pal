import React from 'react'
import PostsContainer from '../../../components/PostsContainer'
import { connect } from 'react-redux'
import PostForm from '../../../components/PostForm'

class MePage extends React.Component {

  state = {
    myPosts: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/my_posts/${this.props.currentUser.id}`)
    .then(res => res.json())
    .then(posts => {
      this.setState({
        myPosts: posts.reverse()
      })
    })
  }

  handleSubmit = (e, postObj) => {
    e.preventDefault()

    fetch(`http://localhost:3000/api/v1/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(postObj)
    })
    .then(res => res.json())
    .then(post => {
      this.setState({
        myPosts: [post, ...this.state.myPosts]
      })
    })
  }

  render(){
    console.log(this.props.currentUser)
    return(
      <React.Fragment>
        <img src={`http://localhost:3000/${this.props.currentUser.image}`}/>
        <audio src={`http://localhost:3000/${this.props.currentUser.my_penpal.song}`} autoPlay></audio>
        <PostForm handleSubmit={this.handleSubmit}/>
        <PostsContainer posts={this.state.myPosts} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(MePage)
