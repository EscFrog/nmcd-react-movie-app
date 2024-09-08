import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail.js";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);

  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovieDetail(json.data.movie);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);
  // console.log(movieDetail);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <MovieDetail
          key={movieDetail.id}
          coverImg={movieDetail.large_cover_image}
          title={movieDetail.title}
          year={movieDetail.year}
          imdb_code={movieDetail.imdb_code}
          runtime={movieDetail.runtime}
          rating={movieDetail.rating}
          like_count={movieDetail.like_count}
          genres={movieDetail.genres}
          description={movieDetail.description_full}
        />
      )}
    </div>
  );
}

export default Detail;
