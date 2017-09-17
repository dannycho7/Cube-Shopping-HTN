import React from "react";

const ShoppingCartItem = ({ name, price, position }) => {
	return (
		<a-entity
			text={`value: ${name} $${price}; color: black; anchor: left; wrapCount: 90` }
			position={position}
		/>
	);
};

export default ShoppingCartItem;
