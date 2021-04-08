import React from "react";

function PostList({ listData }) {
  const list = listData.map((post, id) => {
    return (
      <div key={id}>
        <h1>{post.id}</h1>
        <p>{post.body}</p>
      </div>
    );
  });
  return <div>{list}</div>;
}

export default PostList;
