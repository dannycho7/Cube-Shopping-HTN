import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import VRScene from "./components/VRScene";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<VRScene />
	</Provider>,
document.querySelector('#sceneContainer'));
