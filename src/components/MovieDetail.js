import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({
  coverImg,
  title,
  year,
  imdb_code,
  runtime,
  rating,
  like_count,
  genres,
  description,
}) {
  return (
    <div className={styles.frame}>
      <img src={coverImg} alt={title} />
      <div className={styles.disc_area}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>{title}</h2>
          <h2 className={styles.year}>{`(${year})`}</h2>
        </div>
        <div className={styles.runtime}>
          <span class="material-symbols-outlined">timer</span>
          <span>{runtime > 0 ? `${runtime} min.` : "Unknown"}</span>
        </div>
        <ul className={styles.genres}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <div className={styles.reactions}>
          <div>
            <span class="material-symbols-outlined">star</span>
            <span>{rating}</span>
          </div>
          <div>
            <span class="material-symbols-outlined">favorite</span>
            <span>{like_count}</span>
          </div>
        </div>
        <p className={styles.disc}>
          {description !== ""
            ? description
            : "Sorry, We can't find description."}
        </p>
        <div className={styles.code}>{`IMDB - ${imdb_code}`}</div>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  imdb_code: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  likes_count: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieDetail;
