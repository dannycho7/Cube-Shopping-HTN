import * as actionTypes from "../constants";

const initialState = {
	inventory: [],
	cart: {}
};

function turnArrayIndicesIntoObject(arr) {
	let obj = {}
	for(let i = 0; i < arr.length; i++) {
		obj[i] = false;
	}
	return obj;
}

const itemReducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.ITEM_FETCH_SUCCESS: {
			const { inventory } = action;
			let initialCart = turnArrayIndicesIntoObject(inventory);

			return { ...state, inventory, cart: initialCart }
		}
		case actionTypes.TOGGLE_ITEM: {
			const { payload } = action;
			const { cart } = state;
			return { ...state, cart: { ...cart, [payload]: !cart[payload] } }
		}
		default:
			return state;
	}
}

module.exports = itemReducer;
