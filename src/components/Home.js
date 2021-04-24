/** @format */

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
      <div className="home">
        <div className="banner">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://img4.goodfon.ru/wallpaper/nbig/e/4f/poster-komiks-thor-ragnarok-marvel-personazhi-tor-ragnariok.jpg"
                  alt="banner"
                />{" "}
              </div>
              <div className="carousel-item">
                <img
                  src="https://posterspy.com/wp-content/uploads/2018/01/cap-trilogy-ricojr-rvb.png"
                  alt="banner"
                />{" "}
              </div>
              <div className="carousel-item">
                <img src="https://i.redd.it/ie79r52m3c531.jpg" alt="banner" />{" "}
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
        </div>
        <h2>Movie Trending</h2>
        {movies && movies.map((mv, index) => <Movie key={index} movie={mv} />)}
      </div>
    </div>
  );
};

export default Home;
