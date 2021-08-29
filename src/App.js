import React, {useState} from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  /* Data is typically sent in JSON format which is easy to convert to javascript objects. The response object has the json() method that does that.*/
  const fetchMoviesHandler = async () => {
      const response = await fetch('https://swapi.dev/api/films');
      const data = await response.json();
 
      const transformedMovies = data.results.map(movie => {
          return {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date
          }
      });
      setMovies(transformedMovies);

  };
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
