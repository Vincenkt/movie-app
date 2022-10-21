import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { fetchMoviesList } from '../api/api';
import MovieList from './MovieList';
import { getMovieList } from '../features/movie/movieSlice';

export default function Home(props) {
    const { movies, errorMessage, loading } = useSelector((state) => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMoviesList()
            .then(data => {
                dispatch(getMovieList({
                    payload: data.results
                }));
            });
    }, [dispatch]);

    return (
        <>
            {loading &&
                <div className='loading-movie'>Loading...</div>
            }
            {errorMessage &&
                <span>{errorMessage}</span>
            }
            {movies.length > 0 ? (
                <div className="container">
                    <div className="grid">
                        {movies.map((movieReq) =>
                            <MovieList key={movieReq.id} {...movieReq} />
                        )}
                    </div>
                </div>
            ) : (
                <span className='no-result'>No Results</span>
            )}
        </>
    )
}
