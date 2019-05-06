import React from 'react'
import { Container, Card, Button, Icon, Image } from 'semantic-ui-react'
import CommentContainer from './CommentContainer'
import { connect } from 'react-redux'

class PostCard extends React.Component{

  state = {
    commentClicked: false,
    liked: this.props.post.liked
  }

  handleClick = (e) => {
    e.preventDefault()

    this.setState({
      commentClicked: !this.state.commentClicked
    })
  }

  handleLike = (e) => {
    fetch(`http://localhost:3000/api/v1/posts/${this.props.post.id}/liked`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      }
    }).then(res => res.json())
    .then(parsedRes => {
      this.setState({
        liked: parsedRes
      })
    })
  }

  render(){
    return (
      <React.Fragment>
        <Container className='card-margin-spacing shadow-box' >
          <Card fluid id='post-card' >
            <Card.Content>
              <Card.Header>
                <Image src={`http://localhost:3000/${this.props.post.image}`} className='post-profile-image' circular/>
                {this.props.post.title}
                  <Icon color='red' className='like-heart' name={this.state.liked ? 'heart' : 'heart outline'} onClick={this.props.post.user_id === this.props.currentUser.id ? null : this.handleLike }/>
              </Card.Header>
            </Card.Content>

            { this.props.post.pic &&
              <Image src={`http://localhost:3000/${this.props.post.pic}`} className='post-pic'/>
             }

            <Card.Content description={this.props.post.content}/>
            { this.state.commentClicked ?
            <React.Fragment>
              <Card.Content extra>
                <CommentContainer postId={this.props.post.id} />
              </Card.Content>
              <Button icon='angle up' onClick={this.handleClick} className='pull-down-icon'/>
            </React.Fragment>
            :
            <Button icon='angle down' onClick={this.handleClick} className='pull-down-icon'/>
            }
          </Card>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(PostCard)
