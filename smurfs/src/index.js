import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { SmurfReducer } from './redux/reducers'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(SmurfReducer, applyMiddleware(thunk))

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById("root"));
