

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@reach/router';

const BlogCollection = () => {
 const [posts, setPosts] = useState([]);

 useEffect( () => {
  fetch('/posts.json')
      .then(response => response.json())
      .then(data => setPosts(data.data))
  },[])


  return (
    <div>
      { posts.map((post) => {
        return <Link key={post.id} to={`/posts/${post.id}`}> {post.title} </Link>
      }) }
    </div>
  )
}


export default BlogCollection;
