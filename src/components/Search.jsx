import React from "react";

export class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: props.search,
            movieType: props.movieType
        };
    }

    handleMovieTypeChange = (e) => {
        this.setState({ movieType: e.target.value }, () => {
            this.props.refreshMovies(this.state.search, this.state.movieType);
        });
    };

    handleKeyDown = (ev) => {
        if (ev.keyCode === 13) {
            this.props.refreshMovies(this.state.search, this.state.movieType);
        }
    }

    render() {
        var { movieType } = this.state;
        
        return (
            <div className="row">
                <div className="input-field ">
                    <input className="validate" placeholder="search" type="search" value={this.state.search} 
                           onChange={ev => this.setState({ search: ev.target.value })}
                           onKeyDown={this.handleKeyDown} />

                    <div className="search-movie-types">
                        <label>
                            <input
                                type="radio"
                                className="with-gap" 
                                id="all"
                                value=""
                                name="movieType"
                                checked={movieType === ''}
                                onChange={this.handleMovieTypeChange}
                            />
                            <span>any</span>
                        </label>

                        <label>
                            <input
                                type="radio"
                                className="with-gap" 
                                id="movie"
                                value="movie"
                                name="movieType"
                                checked={movieType === 'movie'}
                                onChange={this.handleMovieTypeChange}
                            />
                            <span>movie</span>
                        </label>

                        <label>
                            <input
                                type="radio"
                                className="with-gap" 
                                id="series"
                                value="series"
                                name="movieType"
                                checked={movieType === 'series'}
                                onChange={this.handleMovieTypeChange}
                            />
                            <span>series</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}