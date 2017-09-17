import React from "react";

const ShoppingCartEmptyMessage = ({ position }) => {
	return (
		<a-entity
			text={`value: No items in your cart.;color: black; anchor: left; wrapCount: 90` }
			position={position}
		/>
	);
};

export default ShoppingCartEmptyMessage;
