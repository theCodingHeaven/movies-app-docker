import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // useState is a react hook, used to manipulate states of the values
  const [popularMovies, setPopularMovies] = useState([]);
  const [highlyRatedMovies, sethighlyRatedMovies] = useState([]);

  //movies - variable
  // setMovies -update movies function

  const fetchMovies = async () => {
    const response = await fetch("http://localhost:3001/getMovies");
    const data = await response.json();
    const result = data.results;

    const popMovies = result.filter((movie) => movie.popularity > 400);
    const highlyRated = result.filter((movie) => movie.vote_average > 7);

    setPopularMovies(popMovies);
    sethighlyRatedMovies(highlyRated);
  };

  // as soon as our component is loaded we make a call to our backend
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <section className="movies-section">
        <h3>Popular Movies</h3>
        <ul className="movies-list">
          {popularMovies.map((movie) => (
            <li key={movie.id} className = "movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="movie-info">
                <h4>{movie.title}</h4>
                <span>Released: {movie.release_date} </span>

                <span>Rating: {movie.vote_avarage}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="movies-section">
        <h3>Highly Rated Movies</h3>
        <ul className="movies-list">
          {highlyRatedMovies.map((movie) => (
             <li key={movie.id} className = "movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="movie-info">
                <h4>{movie.title}</h4>
                <span>Released: {movie.release_date} </span>
                <span>Rating: {movie.vote_avarage} ⭐</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
