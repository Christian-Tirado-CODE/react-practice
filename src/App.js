import React, {useState, useEffect, useCallback} from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  /* 
  Data is typically sent in JSON format which is easy to convert to javascript objects. The response object has the json() method that does that.
   Status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

   Since  an http request is a side-effect we wrap the function call inside the useEffect hook.
   We specify the function call as a dependency because we might have an external state that causes the function to change.
   Since functions are objects which are re-created when the component re-renders the best way approach is to use useCallback() to avoid unnecesary function recreations.
  */


  const fetchMoviesHandler = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
 }, [fetchMoviesHandler]);

  let content = <p>No movies found.</p>;

  if(movies.length > 0)
    content = <MoviesList movies={movies} />;

  if(isLoading)
    content = <p>Loading...</p>;
  
  if(error)
    content = <p>{error}</p>;
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}

      </section>
    </React.Fragment>
  );
}

export default App;
