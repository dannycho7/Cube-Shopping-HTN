import React from "react";

const ShoppingCartTotal = ({ total, position }) => {
	return (
		<a-entity
			text={`value: Total: $${total}; color: black; anchor: left; wrapCount: 80` }
			position={position}
		/>
	);
};

export default ShoppingCartTotal;
