import React from 'react'
import PostsContainer from '../../../components/PostsContainer'
import { connect } from 'react-redux'

class UsPage extends React.Component{

  state = {
    ourPosts: [],
    penpalIsOn: this.props.currentUser.my_penpal.online,
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
    console.log('redux online status:', this.props.currentUser.my_penpal.online)
    console.log('local state', this.state.penpalIsOn)
    return(
      <React.Fragment>
        { this.props.currentUser.my_penpal.online &&
        <h1>I'm On</h1>
        }
        <PostsContainer posts={this.state.ourPosts}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(UsPage)
