import React from "react";

function AutoCompleteData({ data }) {
  const searchedData = data.map((post, id) => {
    return <h4 key={id}>{post.body}</h4>;
  });
  return <div className="queryData">{searchedData}</div>;
}

export default AutoCompleteData;
