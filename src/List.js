import React, { useState, useEffect } from "react";
import PostList from "./PostList";
import SearchBar from "./SearchBar";

function List({ data }) {
  return data.length ? <PostList listData={data} /> : <h1>Loading</h1>;
}

export default List;
