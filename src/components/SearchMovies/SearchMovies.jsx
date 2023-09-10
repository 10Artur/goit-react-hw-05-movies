import { BiSearch } from 'react-icons/bi';

export const SearchMovies = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search movies..."
          autoFocus
          autoComplete="off"
        ></input>
        <button type="submit">
          <BiSearch />
        </button>
      </form>
    </div>
  );
};
