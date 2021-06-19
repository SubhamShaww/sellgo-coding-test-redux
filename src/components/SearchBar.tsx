import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../store/actionCreators";

function SearchBar() {
    const [title, setTitle] = useState<string>("");

    const dispatch: Dispatch<any> = useDispatch();

    const fetchResults = (movie: string) => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(
            `https://jsonmock.hackerrank.com/api/movies/search/?Title=${movie}`,
            {
                signal: signal,
            }
        )
            .then((response) => response.json())
            .then(
                (result) => {
                    // dispatch the action to reducer
                    // console.log(result);
                    dispatch(setSearchResults(result.data));
                },
                (error) => {
                    alert(error.message + ". Please try again.");
                }
            );
    };

    return (
        <div className="searchbar">
            <input
                type="text"
                placeholder="Search movies title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                    e.key === "Enter" && fetchResults(title);
                }}
            />

            <SearchIcon
                className="searchbar__icon"
                onClick={() => fetchResults(title)}
            />
        </div>
    );
}

export default SearchBar;
