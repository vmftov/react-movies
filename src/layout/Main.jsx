import { Component } from "react"
import { Movies } from "./../components/Movies"
import { Preloader } from "./../components/Preloader"
import {Search} from './../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            search: '',
            movieType: '',
            loaded: false
        };
    }

    componentDidMount() {
        this.refreshMovies();
    }

    refreshMovies = (search, movieType) => {
        if (!search) {
            search = 'matrix';
        }
        if (!movieType) {
            movieType = '';
        }

        this.setState({ movies: [], search: search, movieType: movieType, loaded: false });

        getMovies().then(movies => this.setState({ movies: movies, loaded: true }));

        async function getMovies() {
            var uri = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`;
            if (movieType) {
                uri += `&type=${movieType}`;
            }

            await new Promise((resolve) => { setTimeout(resolve, 2000); });
            var response = await fetch(uri);
            var json = await response.json();
            return json.Search;
        }
    }

    render() {
        if (this.state.loaded) {
            return (
                <main className="container content">
                    <Search search={this.state.search} movieType={this.state.movieType} refreshMovies={this.refreshMovies} /> 
                    <Movies movies={this.state.movies} />
                </main>
            );
        } else {
            return (
                <main className="container content preloader-content">
                    <Preloader />
                </main>
            );
        }
    }
}