import React from 'react';
import { useState, useEffect } from 'react';
import './Banner.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import requests from '../config/Requests';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(requests.fetchTrending);
      const data = await request.json();
      const movieList = data.results;
      console.log(movieList);

      setMovie(movieList[Math.floor(Math.random() * movieList.length - 1)]);
    }

    fetchData();
  }, []);

  function truncateText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + '...'
      : 'No description';
  }

  console.log(movie);

  return (
    <header className="banner">
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.original_name}
        </h1>
        <p className="banner_description">
          {truncateText(movie?.overview, 100)}
        </p>
        <div className="banner__buttons">
          <button className="banner__button banner__button--play">
            <PlayArrowIcon /> Lecture
          </button>
          <button className="banner__button">
            <HelpOutlineIcon /> Plus d'infos{' '}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
