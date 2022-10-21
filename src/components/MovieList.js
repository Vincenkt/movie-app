import React from "react";
import { Link } from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

export default function MovieList(props) {
    const { poster_path, id } = props;
    return (
        <div className="card text-center bg-secendary mb-3">
            <div className="card-body ">
                <Link to={`/detail/${id} `} style={{ color: '#323232', textDecoration: 'none' }}><img className="card-img-top" src={API_IMG + poster_path} alt="" /></Link>
                <div className="card-body">
                    <button type="button" className="btn btn-dark"><Link to={`/detail/${id} `} style={{ color: '#ffffff', textDecoration: 'none' }}>View More</Link></button>
                </div>
            </div>
        </div>
    )
}
