import React from 'react';
import { Movie } from "./../components/Movie"

function Movies(props) {
    if (props.movies) {
        return (
            <div className="movies">
                {
                    props.movies.map(m => {
                        return <Movie key={m.imdbID} movie={m} />
                    })
                }
            </div>
        );
    } else {
        return (
            <div className="movies">
                Movies were not found
            </div>
        );
    }
}

export { Movies };