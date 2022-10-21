import { useParams } from "react-router-dom";
import { useQuery } from 'react-query';
import { fetchMovieDetail } from "../../api/api";

export default function Details(props) {
    const { movieId } = useParams();
    const movieQuery = useQuery(["movie", movieId], () =>
        fetchMovieDetail(movieId), { retry: false, select: state => state?.data }
    );
    const movieData = movieQuery?.data || [];
    return (
        <>
            {movieData.id ? (
                <div className="container -fluid ">
                    <div className="container d-flex"  >
                        <div className=""  >
                            <img key={movieData?.id} style={{ width: '20rem' }} src={`https://image.tmdb.org/t/p/w500` + movieData?.poster_path} alt="" /></div>
                        <div className="offset-1" >
                            <h1 >{movieData?.title}</h1>
                            <div className="movie-infos">
                                <span className="movie-date">{movieData?.release_date}</span>
                                <span className="movie-runtime">
                                    {Math.floor(movieData?.runtime / 60)}h {movieData?.runtime % 60}m</span>
                            </div>
                            <div className="movie-tagline">{movieData?.tagline ? movieData?.tagline : null}</div>
                            <div className="movie-overview">{movieData?.overview}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='loading-movie-detail'>Loading...</div>
            )}
        </>
    )
};
