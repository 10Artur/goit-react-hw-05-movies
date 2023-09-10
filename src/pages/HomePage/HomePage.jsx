import { fetchTrendingMovies } from 'components/API';
import MovieList from 'components/MovieList/MovieList';
import { useEffect } from 'react';
import { useState } from 'react';

const HomePage = () => {
  const [trendingMovies, settrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const resp = await fetchTrendingMovies();
        if (resp.status !== 200) {
          throw new Error();
        }
        settrendingMovies(resp.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(({ id, original_title }) => (
          <MovieList key={id} id={id} title={original_title} />
        ))}
      </ul>
    </>
  );
};

export default HomePage;
