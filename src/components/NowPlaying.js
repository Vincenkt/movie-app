import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieList from './MovieList';
import { fetchNowPlaying } from '../api/api';
import { getMovieList } from '../features/movie/movieSlice';

export default function NowPlaying(props) {
    const { movies, errorMessage, loading } = useSelector((state) => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchNowPlaying()
            .then(data => {
                dispatch(getMovieList({
                    payload: data.results
                }));
            });
    }, [])

    return (
        <>
            {loading &&
                <div className='loading-movie'>Loading...</div>
            }
            {errorMessage &&
                <span>{errorMessage}</span>
            }
            {movies.length > 0 && (
                <div className="container">
                    <div className="grid">
                        {movies.map((movieReq) =>
                            <MovieList key={movieReq.id} {...movieReq} />
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
