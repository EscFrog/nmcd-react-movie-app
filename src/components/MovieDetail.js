import PropTypes from "prop-types";

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
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <h2>{`(${year})`}</h2>
      <div>{imdb_code}</div>
      <div>{`Runtime: ${runtime} minutes`}</div>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <div>{`Rating: ${rating}`}</div>
      <div>{`Likes: ${like_count}`}</div>
      {description !== "" ? (
        <p>{description}</p>
      ) : (
        <p>Can't find description</p>
      )}
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
