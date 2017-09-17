import React from "react";

const ShoppingCartTotal = ({ inventory, items_in_cart, position }) => {
	let total = 0;
	items_in_cart.forEach(item_in_cart_id => {
		total += inventory[item_in_cart_id]["price"];
	});
	return (
		<a-entity
			text={`value: Total: $${total}; color: black; anchor: left; wrapCount: 80` }
			position={position}
		/>
	);
};

export default ShoppingCartTotal;
