import React from 'react';

function Movie(props) {
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
            <img className="activator movie-img" src={props.movie.Poster} />
            </div>
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{props.movie.Title}<i className="material-icons right">{props.movie.Year}</i></span>
            <p><a href="#">This is a link</a></p>
            </div>
            <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
    );
    
}

export { Movie };