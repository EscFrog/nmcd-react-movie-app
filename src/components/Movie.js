import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie__img} />
        <div>
          <h2 className={styles.movie__title}>{title}</h2>
          <h3 className={styles.movie__year}>{`(${year})`}</h3>
          <ul className={styles.movie__genres}>
            {Array.isArray(genres) ? (
              genres.map((genre) => <li key={genre}>{genre}</li>)
            ) : (
              <li>undefined</li>
            )}
          </ul>
          <p className={styles.movie__disc}>
            {summary !== ""
              ? summary.length > 235
                ? `${summary.slice(0, 235)}...`
                : summary
              : "Sorry, We can't find description."}
          </p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
