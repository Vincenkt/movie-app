import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        loading: true,
        movies: [],
        errorMessage: null
    },
    reducers: {
        search: (state, action) => {
            return { ...state, movies: action.payload.payload, loading: false }
        },
        getMovieList: (state, action) => {
            return { ...state, movies: action.payload.payload, loading: false }
        }
    },
})

export const { search, getMovieList, incrementByAmount } = movieSlice.actions

export default movieSlice.reducer