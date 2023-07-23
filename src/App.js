/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import MovieContainer from "./movieContainer";
import SearchIcon from "./searchIcon.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=9a270453";
//  http://www.omdbapi.com/?i=tt3896198&apikey=9a270453

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  // * Function for fetching movies
  const searchMovies = async (title) => {
    // title = title.replace(" ", "+");
    // console.log(undefined);
    const response =
      // title === undefined
      //   ? await fetch(`${API_URL}`)
      //   :
      await fetch(`${API_URL}&s=${title}`);
    // (response = );
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies();
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for the Movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieContainer movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
