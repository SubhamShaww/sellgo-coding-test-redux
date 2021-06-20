import * as actionTypes from "./actionTypes";

export function setSearchResults(movies: Movie[]) {
    const action: MoviesAction = {
        type: actionTypes.SET_SEARCH_RESULTS,
        movies,
    };

    return (dispatch: MovieDispatchType) => {
        dispatch(action);
    };
}

export function deleteResult(movies: Movie[]) {
    const action: MoviesAction = {
        type: actionTypes.DELETE_RESULT,
        movies,
    };

    return (dispatch: MovieDispatchType) => {
        dispatch(action);
    };
}
