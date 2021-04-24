/** @format */

import Header from "./header";
import axios from "axios";
import Movie from "./movie";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    try {
      const data = await axios.get(
        "https://www.omdbapi.com/?s=iron&apikey=4a3b711b"
      );

      setMovies(data.data.Search);
    } catch (error) {
      console.log("False", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(movies);
  return (
    <div>
      <Header />
      <div className="banner">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <img
          src="https://c.wallhere.com/photos/47/02/Thor_movies_poster_movie_poster_Marvel_Comics_Marvel_Cinematic_Universe_Thor_Ragnarok_Mjolnir-1265805.jpg!d"
          alt="banner"
        />
        <div>Movie Trending</div>
        {movies && movies.map((mv, index) => <Movie key={index} movie={mv} />)}
      </div>
    </div>
  );
};

export default Home;
