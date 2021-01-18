// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import BlogCollection from './BlogCollection';
import React from 'react';
import Post from './Post'
import ReactDOM from 'react-dom';
import { Router, Link } from "@reach/router";


const App = props => (
  <div className="main">
    {props.children}
  </div>
)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App>
      <Router>
        <BlogCollection path="/" > </BlogCollection>
        <Post path="/posts/:postId" > </Post>
      </Router>
    </App>,
    document.body.appendChild(document.createElement('div')),
  )
})
