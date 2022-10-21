import React, { useCallback } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import Navbar from './components/Navbar';
import Home from './components/Home';
import NowPlaying from './components/NowPlaying';
import TopRate from './components/TopRate';
import Details from './components/MovieDetail/Details';
import SearchBox from './components/Search/SearchBox';
import { fetchSearchResults } from './api/api';
import { search } from './features/movie/movieSlice';

const navRoutes = [
  { title: 'Homepage', path: '/', element: <Home />, isNav: true },
  { title: 'Now Playing', path: 'nowplaying', element: <NowPlaying />, isNav: true },
  { title: 'Top Rated', path: 'toprated', element: <TopRate />, isNav: true },
  { title: 'Detail', path: 'detail/:movieId', element: <Details /> },
];

export default function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleSearch = useCallback((event) => {
    let query = event.target.value;
    query && debouncedFetchData(query);
  }, []);

  const debouncedFetchData = debounce((query) => {
    fetchData(query);
  }, 500);

  const fetchData = async (query) => {
    const res = await fetchSearchResults(query);
    dispatch(search({
      payload: res.results
    }));
  };

  return (
    <>
      <Navbar />
      {!pathname.includes('/detail/') && <SearchBox onChangeQuery={handleSearch} />}
      <Routes>
        {navRoutes.map((item, index) => (<Route key={index} path={item.path} element={item.element}></Route>))}
      </Routes>
    </>
  );
}
