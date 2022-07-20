
import React from 'react';
import { urlFor } from '../lib/sanity';


const Card = ({ post }) => {
  return (
    <div className='card-container'>
      <h2>{post.title}</h2>
      <p>Publised on: {new Date(post.publistAt).toDateString()}</p>

      <img className='mainImage' src={urlFor(post.mainImage)} alt={post.title + ' image'} />
      <hr />

      <div className='info-container'>
        <p>Posted by: {post.username}</p>
        <img
          className='avatar'
          src={urlFor(post.authorImage)}
          alt={post.username + ' avatar'}
        />
      </div>

      <div className='tag-container'>

        {post.categories.map(category => (
          <Tag key={category.id} title={category.title} />
        ))}
      </div>

    </div>
  )
}

export default Card