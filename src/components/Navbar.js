import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <> <div className='container-fluid text-light' style={{ backgroundColor: "#1e272e" }}>
            <div className="container  text-light">
                <header className="p-3 mb-3">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-start justify-content-between">
                            <div className="d-flex link-light text-light">
                                <Link to="" className="nav-link px-2 justify-content-start link-light">
                                    Home
                                </Link>
                                <Link to="nowplaying" className="nav-link px-2 link-light">
                                    Now Playing
                                </Link>
                                <Link to="toprated" className="nav-link px-2 link-light">
                                    Top Rated
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
        </>
    );
}
