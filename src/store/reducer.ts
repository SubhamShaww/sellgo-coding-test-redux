import * as actionTypes from "./actionTypes";

const initialState: MovieState = {
    movies: [],
};

const reducer = (
    state: MovieState = initialState,
    action: MoviesAction & CategoryAction
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

        case actionTypes.SORT_RESULTS:
            console.log("sorting ..");
            const compareTitleFunction = (a: Movie, b: Movie) => {
                if (a.Title < b.Title) {
                    return -1;
                } else if (a.Title > b.Title) {
                    return 1;
                } else {
                    return 0;
                }
            };

            const compareYearFunction = (a: Movie, b: Movie) => {
                if (a.Year < b.Year) {
                    return -1;
                } else if (a.Year > b.Year) {
                    return 1;
                } else {
                    return 0;
                }
            };

            const compareIdFunction = (a: Movie, b: Movie) => {
                if (a.imdbID < b.imdbID) {
                    return -1;
                } else if (a.imdbID > b.imdbID) {
                    return 1;
                } else {
                    return 0;
                }
            };

            if (action.category === "Title") {
                state.movies.sort(compareTitleFunction);
            } else if (action.category === "Year") {
                state.movies.sort(compareYearFunction);
            } else if (action.category === "imdbID") {
                state.movies.sort(compareIdFunction);
            }

            return state;
    }

    return state;
};

export default reducer;
