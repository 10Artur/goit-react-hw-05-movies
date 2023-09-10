import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ id, title }) => {
  const { pathname, search } = useLocation();
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: pathname + search }}>
        {title}
      </Link>
    </li>
  );
};

export default MovieList;
