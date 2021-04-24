/** @format */

import React, { useReducer, useEffect } from "react";
import "../App.css";
import Header from "./header";
import Movie from "./movie";
import Search from "./search";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=iron&apikey=4a3b711b";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

const SearchMovie = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search,
        });
      });
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error,
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;

  return (
    <div className="App">
      <Header text="MOVIES" />
      <Search search={search} />
      <h2>Trending movies</h2>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>Loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchMovie;