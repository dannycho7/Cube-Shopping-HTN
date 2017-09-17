import * as actionTypes from "../constants";

const initialState = {
	inventory: [],
	cart: {},
	total: 0
};

function turnArrayIndicesIntoObject(arr) {
	let obj = {}
	for(let i = 0; i < arr.length; i++) {
		obj[i] = false;
	}
	return obj;
}

function calculateTotal(cart, inventory) {
	let items_in_cart =  Object.keys(cart).filter(item_id => cart[item_id] === true)
	let total = 0;
	items_in_cart.forEach(item_in_cart_id => {
		total += inventory[item_in_cart_id]["price"];
	});
	return total;
}

const itemReducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.ITEM_FETCH_SUCCESS: {
			const { inventory } = action;
			let initialCart = turnArrayIndicesIntoObject(inventory);
			let total = calculateTotal(initialCart, inventory);
			return { ...state, inventory, cart: initialCart, total }
		}
		case actionTypes.TOGGLE_ITEM: {
			const { payload } = action;
			const { cart, inventory } = state;
			let updatedCart = { ...cart, [payload]: !cart[payload] };
			let total = calculateTotal(updatedCart, inventory);
			return { ...state, cart: updatedCart, total };
		}
		default:
			return state;
	}
}

module.exports = itemReducer;
