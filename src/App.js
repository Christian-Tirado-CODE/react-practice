import React, {useState} from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  /* 
  Data is typically sent in JSON format which is easy to convert to javascript objects. The response object has the json() method that does that.
   Status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  */
  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
     try { 

      const response = await fetch('https://swapi.dev/api/films');
      if(!response.ok){
        throw new Error(response.status);
     }

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
      
    }catch(error) {
      setError(error.message);
    }
    setIsLoading(false);
  };
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No movies found.</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading &&  <p>Loading...</p>}

      </section>
    </React.Fragment>
  );
}

export default App;
