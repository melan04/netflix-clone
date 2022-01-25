import React from "react";
import { useState, useEffect } from "react";
import "./Banner.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import requests from "../config/Requests";


function Banner() {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const request = await fetch(requests.fetchTrending);
            const data = await request.json();
            const movieList = data.results
            console.log(movieList);


            setMovie(
                movieList[
                Math.floor(Math.random() * movieList.length - 1)
                ]
            );
        }

        fetchData();
    }, []);

    console.log(movie);


    return (
        <header className="banner">
            <div className="banner__content">
                <h1 className="banner__title"> Titre </h1>
                <p className="banner_description">
                    Lorem nvjkfqbvfkjBV JF vfj
                </p>
                <div className="banner__buttons">
                    <button className="banner__button banner__button--play"><PlayArrowIcon /> Lecture</button>
                    <button className="banner__button"><HelpOutlineIcon /> Plus d'infos </button>
                </div>
            </div>

        </header>
    );
}

export default Banner;

// const getProductList = async () => {
//     const result = await fetch("http://localhost:3000/api/teddies");
//     const productList = await result.json();
//     return productList;
//   };

/**/

// const postData = { firstName: 'Korben', lastName: 'Dallas' };
// const apiURL = 'https://top-movies.com/api/the-fifth-element/character';

// axios.post(apiURL, {
//   ...postData
// })
// 	.then(response => console.log('Success: ', response))
// 	.catch(error => console.log('Error: ', error));

// /**/

// const postData = { firstName: 'Korben', lastName: 'Dallas' };
// const apiURL = 'https://top-movies.com/api/the-fifth-element/character';

// fetch(apiURL, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(postData),
// })
// 	.then(response => response.json())
// 	.then(jsonResponse => console.log('Success: ', jsonResponse))
// 	.catch(error => console.log('Error: ', error));


/**/
