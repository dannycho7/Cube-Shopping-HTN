import React from "react";
import { connect } from "react-redux";

import ShoppingHeader from "./presenters/ShoppingHeader";
import ShoppingCartItem from "./presenters/ShoppingCartItem";
import ShoppingCartTotal from "./presenters/ShoppingCartTotal";
import ShoppingCartEmptyMessage from "./presenters/ShoppingCartEmptyMessage";
import ShoppingCartCurrentItemDescription from "./presenters/ShoppingCartCurrentItemDescription";

const ShoppingCart = ({ cart, inventory, total, currentItem }) => {
	let y_pos = 0.35;
	let getPosition = (x_shift = 0) => {
		y_pos -= 0.1;
		return `${-0.3 + x_shift} ${y_pos} -0.5`;
	}
	let items_in_cart = Object.keys(cart).filter(item_id => cart[item_id] === true)
	return (
		<a-entity>
			{inventory[currentItem] ?
			(
				<ShoppingCartCurrentItemDescription
					currentItem={inventory[currentItem]}
					position="0 0.2 -0.5"
				/>
			): null}
			<ShoppingHeader position={getPosition()} />
			{items_in_cart.length > 0 && items_in_cart.map(cart_item_id => {
				let cart_item = inventory[cart_item_id];
				return <ShoppingCartItem key={cart_item_id} {...cart_item} position={getPosition()} />
			}) || <ShoppingCartEmptyMessage position={getPosition()}/>}
			<ShoppingCartTotal
				total={total}
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
