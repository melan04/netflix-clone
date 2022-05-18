import React from 'react';
import './Row.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Row({ title, fetchUrl, isPoster }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(fetchUrl);
      const data = await request.json();
      const moviesList = data.results;

      console.log(moviesList);

      setMovies(moviesList);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title"> {title}</h2>
      <div className="row__images">
        {movies.map(movie => (
          <div key={movie.id}>
            <Link to={`/video/${movie?.id}`}>
              {isPoster ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  className="row__image"
                  alt="{movie?.title || movie?.original_name}"
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                  className="row__image"
                  alt={movie?.title || movie?.original_name}
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
