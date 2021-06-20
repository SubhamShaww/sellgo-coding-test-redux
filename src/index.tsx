import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import reducer from "./store/reducer";

// creating store
const store: Store<MovieState, MoviesAction> & {
    dispatch: MovieDispatchType;
} = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// giving access of store to App component and its child components
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
