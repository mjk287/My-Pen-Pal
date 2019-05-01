import React from 'react'
import PostsContainer from '../../../components/PostsContainer'
import { connect } from 'react-redux'
import PostForm from '../../../components/PostForm'
import MyImageContainer from '../../../components/MyImageContainer'
import { Grid } from 'semantic-ui-react'

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
    return(
      <React.Fragment>
        <Grid>
          <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={10}>
            <MyImageContainer />
            <PostForm handleSubmit={this.handleSubmit}/>
            <PostsContainer posts={this.state.myPosts} />
          </Grid.Column>
          <Grid.Column width={3}>
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

export default connect(mapStateToProps)(MePage)
