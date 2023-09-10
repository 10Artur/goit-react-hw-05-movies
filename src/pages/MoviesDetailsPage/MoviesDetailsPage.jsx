import { fetchMovieById } from 'components/API';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const resp = await fetchMovieById(movieId);
        if (resp.status !== 200) {
          throw new Error();
        }
        setMovie(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieById();
  }, [movieId]);

  if (!movie) {
    return;
  }
  const {
    original_title,
    poster_path,
    release_date,
    overview,
    genres,
    vote_average,
  } = movie;
  const currentGenres = genres?.map(genre => genre.name).join(' ');
  const yearRelise = release_date.split('-')[0];
  const userScore = Math.round(vote_average * 10);

  return (
    <div>
      <Link to={state.from}>Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
        />
        <div>
          <h2>
            {original_title}({yearRelise})
          </h2>
          <p>User score: {userScore}%</p>
          <h3>Overview</h3>
          {overview !== '' ? (
            <p>{overview}</p>
          ) : (
            <div>information not found</div>
          )}

          <h4>Genres</h4>
          {currentGenres !== '' ? (
            <p> {currentGenres}</p>
          ) : (
            <div>information not found</div>
          )}
        </div>
      </div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: state.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: state.from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MoviesDetailsPage;
