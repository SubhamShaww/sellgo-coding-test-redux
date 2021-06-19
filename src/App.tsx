import React from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import "./scss/App.scss";

function App() {
    return (
        <div className="app">
            {/* Search Bar */}
            <SearchBar />

            {/* Search Results */}
            <SearchResults />
        </div>
    );
}

export default App;
