import React from 'react'

const posts = ({posts}) => {
  return (
    <ul className='posts'>
      {posts.map(post => <li className='post' key={post.id}><strong>{post.title}</strong> <br /> {post.body}</li>)}
    </ul>
  )
}

export default posts
