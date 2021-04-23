import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title" style={{ color: "red" }}>
          {title}
        </h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((
            genre,
            index //map function은 item(genre)말고 또다른 argument(item number)를 준다. 이름은 마음대로 아무거나 붙일 수 있다.
          ) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
