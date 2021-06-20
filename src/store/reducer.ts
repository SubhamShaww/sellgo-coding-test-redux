import * as actionTypes from "./actionTypes";

const initialState: MovieState = {
    movies: [],
};

const reducer = (
    state: MovieState = initialState,
    action: MoviesAction
): MovieState => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_RESULTS:
            return {
                ...state,
                movies: action.movies,
            };

        case actionTypes.DELETE_RESULT:
            const updatedMovies: Movie[] = state.movies.filter(
                (movie) => movie.imdbID !== action.movies[0].imdbID
            );

            return {
                ...state,
                movies: updatedMovies,
            };
    }

    return state;
};

export default reducer;
