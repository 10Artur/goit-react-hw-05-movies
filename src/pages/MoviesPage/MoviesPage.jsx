import MovieList from 'components/MovieList/MovieList';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';

import { fetchMovies } from 'components/API';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const getMovies = async () => {
      try {
        const resp = await fetchMovies(query);
        if (resp.status !== 200) {
          throw new Error();
        }
        setMovies(resp.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    if (query !== '') {
      getMovies();
    }
  }, [query]);

  const handlerSubmit = evt => {
    evt.preventDefault();

    const queryCurrent = evt.target.elements.query.value.trim();
    setSearchParams({ query: queryCurrent });

    evt.target.reset();
  };

  return (
    <>
      <SearchMovies onSubmit={handlerSubmit} />
      <ul>
        {movies.map(({ original_title, id }) => (
          <MovieList key={id} id={id} title={original_title} />
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
