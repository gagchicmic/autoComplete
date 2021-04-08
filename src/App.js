import React, { useState, useEffect } from "react";
import List from "./List";
import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  const [data, setData] = useState([]);
  const [isSearched, setIsSearched] = useState([]);
  const apiCall = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    setData(data.slice(0, 5));
  };
  useEffect(() => {
    apiCall();
  }, []);

  const handleChange = (e) => {
    const query = e.target.value;
    const retriveData = data.filter((post) => {
      const queries = query.split(" ");

      return queries.every((qry) => {
        return post.body.includes(qry);
      });
    });
    query ? setIsSearched(retriveData) : setIsSearched([]);
  };
  return (
    <div className="mainDiv">
      <div className="container">
        <SearchBar handleChange={handleChange} isSearched={isSearched} />
        <List data={data} />
      </div>
    </div>
  );
}

export default App;
