import React from 'react'
import PostsContainer from '../../../components/PostsContainer'
import { connect } from 'react-redux'
import PostForm from '../../../components/PostForm'
import PostPicForm from '../../../components/PostPicForm'
import RecorderForm from '../../../components/RecorderForm'
import MyImageContainer from '../../../components/MyImageContainer'
import { Grid } from 'semantic-ui-react'


class MePage extends React.Component {

  state = {
    myPosts: null,
    formType: 'text'
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

    const data = new FormData()
    Object.keys(postObj).forEach((key, value) => {
      if (!!postObj[key]) {
        data.append(key, postObj[key])
      }
    })

    fetch(`http://localhost:3000/api/v1/posts`, {
      method: 'POST',
      body: data
    })
    .then(res => res.json())
    .then(post => {
      this.setState({
        myPosts: [post, ...this.state.myPosts]
      })
    })
  }

  handleTypeChange = (type) => {
    this.setState({
      formType: type
    })
  }

  renderForm = () => {
    switch(this.state.formType){
      case 'pic':
        return <PostPicForm handleSubmit={this.handleSubmit} handleTypeChange={this.handleTypeChange}/>
      case 'voice':
        return <RecorderForm handleSubmit={this.handleSubmit} handleTypeChange={this.handleTypeChange}/>
      default:
        return <PostForm handleSubmit={this.handleSubmit} handleTypeChange={this.handleTypeChange}/>
    }
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
            { this.renderForm() }
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
