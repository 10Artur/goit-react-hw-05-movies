import { GlobalStyle } from './GlobalStyle';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { lazy } from 'react';

const Home = lazy(() => import('../pages/HomePage/HomePage'));
const Movies = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MoviesDetails = lazy(() =>
  import('../pages/MoviesDetailsPage/MoviesDetailsPage')
);

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
