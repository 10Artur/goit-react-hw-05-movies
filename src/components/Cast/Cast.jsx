import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../API';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const resp = await fetchMovieCredits(movieId);

        if (resp.status !== 200) {
          throw new Error();
        }
        setCast(resp.data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieCredits();
  }, [movieId]);

  return (
    <div>
      {cast.length !== 0 ? (
        cast.map(({ original_name, profile_path, character, id }) => {
          return (
            <div key={id}>
              <h3>{original_name}</h3>
              <p>{character !== '' ? character : 'no data'}</p>
            </div>
          );
        })
      ) : (
        <div>We don't have any cast for this movie</div>
      )}
    </div>
  );
};

export default Cast;
