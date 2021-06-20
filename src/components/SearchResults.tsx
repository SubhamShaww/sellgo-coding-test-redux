import React, { useEffect, useState } from "react";
import { TrashIcon, SelectorIcon } from "@heroicons/react/solid";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { deleteResult } from "../store/actionCreators";

function SearchResults() {
    const [moviesList, setMoviesList] = useState<Movie[]>([]);

    const movies: readonly Movie[] = useSelector(
        (state: MovieState) => state.movies,
        shallowEqual
    );

    useEffect(() => {
        let isMounted: boolean = true;
        let tempList: Movie[] = [];

        movies.map((movie) => tempList.push(movie));

        isMounted && setMoviesList(tempList);

        return () => {
            // cleanup function
            isMounted = false;
        };
    }, [movies]);

    const dispatch: Dispatch<any> = useDispatch();

    function sortResultByCategory(category: string) {
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

        const customSort = (list: Movie[]): Movie[] => {
            let tempList: Movie[] = [];

            list.map((movie) => tempList.push(movie));

            if (category === "Title") {
                tempList.sort(compareTitleFunction);
            } else if (category === "Year") {
                tempList.sort(compareYearFunction);
            } else if (category === "imdbID") {
                tempList.sort(compareIdFunction);
            }

            return tempList;
        };

        setMoviesList(customSort(moviesList));
    }

    return (
        <div className="searchresults">
            <div className="searchresults__title">
                <p
                    onClick={() => {
                        sortResultByCategory("Title");
                    }}
                >
                    Title
                    <SelectorIcon className="sorticon" />
                </p>
                <p
                    onClick={() => {
                        sortResultByCategory("Year");
                    }}
                >
                    Year
                    <SelectorIcon className="sorticon" />
                </p>
                <p
                    onClick={() => {
                        sortResultByCategory("imdbID");
                    }}
                >
                    imdbID
                    <SelectorIcon className="sorticon" />
                </p>
            </div>

            {moviesList.map((movie) => {
                return (
                    <div
                        key={movie.imdbID}
                        className="searchresults__body"
                        onTouchMove={() => {
                            dispatch(deleteResult([movie]));
                        }}
                    >
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
