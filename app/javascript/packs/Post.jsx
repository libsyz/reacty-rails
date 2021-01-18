
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@reach/router';


const Post = (props) => {
  const [body, setBody ] = useState('');
  const [title, setTitle ] = useState('');

  useEffect( () => {
    fetch(`${props.postId}.json`)
      .then(res => res.json())
      .then(data => {
        setBody(data.post.body);
        setTitle(data.post.title);
      })
  },[])

  return (
    <div>

      { console.log(props) }
      <h2> { title } </h2>
      <p> { body } </p>
      <Link to='/'> Back </Link>
    </div>
  )
}


export default Post;
