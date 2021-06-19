import React from "react";
import { TrashIcon } from "@heroicons/react/solid";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { deleteResult, sortResultByCategory } from "../store/actionCreators";

function SearchResults() {
    const movies: readonly Movie[] = useSelector(
        (state: MovieState) => state.movies,
        shallowEqual
    );

    const dispatch: Dispatch<any> = useDispatch();

    return (
        <div className="searchresults">
            <div className="searchresults__title">
                <p
                    onClick={(e) => {
                        const input = e.target as HTMLElement;
                        dispatch(sortResultByCategory(input.innerText));
                    }}
                >
                    Title
                </p>
                <p
                    onClick={(e) => {
                        const input = e.target as HTMLElement;
                        dispatch(sortResultByCategory(input.innerText));
                    }}
                >
                    Year
                </p>
                <p
                    onClick={(e) => {
                        const input = e.target as HTMLElement;
                        dispatch(sortResultByCategory(input.innerText));
                    }}
                >
                    imdbID
                </p>
            </div>
            {movies.map((movie) => {
                return (
                    <div key={movie.imdbID} className="searchresults__body">
                        <p>{movie.Title}</p>
                        <p>{movie.Year}</p>
                        <p>{movie.imdbID}</p>
                        <TrashIcon
                            className="trash"
                            onClick={() => {
                                dispatch(deleteResult([movie]));
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default SearchResults;
