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

type CategoryAction = {
    type: string;
    category: string;
};

type MovieDispatchType = (args: MoviesAction) => MoviesAction;

type CategoryDispatchType = (args: CategoryAction) => CategoryAction;
