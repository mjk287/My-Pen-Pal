import React from 'react'
import PostsContainer from '../../../components/PostsContainer'
import { connect } from 'react-redux'

class UsPage extends React.Component{

  state = {
    ourPosts: [],
    penpalIsOn: false,
  }

  componentDidMount(){
    // const { currentUser } = this.props
    // const channel_ids = [currentUser.id, currentUser.my_penpal.id].sort()
    // this.props.cable.subscriptions.create({channel: 'PenpalChannel', room: `${channel_ids[0]}_${channel_ids[1]}`}, {
    //   connected: () => {},
    //   disconnected: () => {},
    //   received: (data) => {
    //     if(data.isOnline){
    //       this.setState({
    //         penpalIsOn: true
    //       })
    //     }
    //   }
    // })

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
        { this.state.penpalIsOn &&
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
