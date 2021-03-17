import React from "react";
import "./App.css";

import SearchMovies from "./components/SearchMovies";

function App() {
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <SearchMovies />
      Course Material from
      <a
        href="https://scrimba.com/learn/reactmovie"
        target="_blank"
        rel="noreferrer"
      >
        Scrimba
      </a>
    </div>
  );
}

export default App;
