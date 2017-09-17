import React from "react";
import { connect } from "react-redux";

import ShoppingHeader from "./presenters/ShoppingHeader";
import ShoppingCartItem from "./presenters/ShoppingCartItem";
import ShoppingCartTotal from "./presenters/ShoppingCartTotal";
import ShoppingCartEmptyMessage from "./presenters/ShoppingCartEmptyMessage";

const ShoppingCart = ({ cart, inventory }) => {
	let y_pos = 0.4;
	let getPosition = () => {
		y_pos -= 0.1;
		return `-0.6 ${y_pos} -0.5`;
	}
	let items_in_cart = Object.keys(cart).filter(item_id => cart[item_id] === true)
	return (
		<a-entity>
			<ShoppingHeader position={getPosition()} />
			{items_in_cart.length > 0 && items_in_cart.map(cart_item_id => {
				let cart_item = inventory[cart_item_id];
				return <ShoppingCartItem key={cart_item_id} {...cart_item} position={getPosition()} />
			}) || <ShoppingCartEmptyMessage position={getPosition()}/>}
			<ShoppingCartTotal
				items_in_cart={items_in_cart}
				inventory={inventory}
				position={getPosition()}
			/>
			</a-entity>
	);
};

const mapStateToProps = (state) => {
	const { item } = state;
	return item;
};

export default connect(mapStateToProps)(ShoppingCart);
