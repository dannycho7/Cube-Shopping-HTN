import * as actionTypes from "../constants";

module.exports.grabItems = () => {
	return function(dispatch, getState) {
		var xhttp = new XMLHttpRequest();

		xhttp.addEventListener("load", () => {
			let inventory = JSON.parse(xhttp.responseText);
			dispatch({
				type: actionTypes.ITEM_FETCH_SUCCESS,
				inventory
			});
		});

		xhttp.open("GET", "/items");
		xhttp.send();
	}
};

module.exports.toggleItem = (index) => {
	return {
		type: actionTypes.TOGGLE_ITEM,
		payload: index
	};
};

module.exports.toggleCurrent = (index = null) => {
	return {
		type: actionTypes.TOGGLE_CURRENT,
		payload: index
	};
};