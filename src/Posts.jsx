import React from 'react';

const Posts = props => {
  {props.posts.map(post => (
    <div key={props.post.id} className="row">
      <div className="col-6 offset-3">
        <div className="content-block">
          <div className="card is-centered">
            <h4 style={{color: "#00e5ff"}}>{post.slug}</h4>
              <h2>
                <a style={{color: "black"}}href={post.link} target="_blank">{post.title.rendered}</a>
              </h2>
            <p />
            <p className="proxima-nova is-size-h4 is-weight-medium">
              By: {post.author}
            </p>
            <p className="proxima-nova is-size-h4 is-weight-light">
              {post.date} - 8 min read
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
};

export default Posts;