import React from 'react'
import { Card } from 'semantic-ui-react'
import Loader from './Loader'

const PostCard = React.lazy(() => import('./PostCard'))

const PostsContainer = (props) => {
  const makePostCards = () => {
    return props.posts.map(post => {
      return <PostCard key={post.id} post={post} />
    })
  }

  if(!props.posts) {
    return(
      <Loader />
    )
  }

  return(
    <React.Fragment>
      { props.posts.length === 0 ?
        <h3>You should write a post!</h3>
         :
        <Card.Group>
          <React.Suspense fallback={<Loader />}>
            {makePostCards()}
          </React.Suspense>
        </Card.Group>
      }
    </React.Fragment>
  )
}

export default PostsContainer
