interface Movie {
    Title: string;
    Year: number;
    imdbID: string;
}

type MovieState = {
    movies: Movie[];
};

type MoviesAction = {
    type: string;
    movies: Movie[];
};

type MovieDispatchType = (args: MoviesAction) => MoviesAction;
