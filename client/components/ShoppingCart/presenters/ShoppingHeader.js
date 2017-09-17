import React from "react";

const ShoppingHeader = ({ position }) => {
	return (
		<a-entity
			text="value: Your shopping cart; color: black; anchor: left; wrapCount: 60;"
			position={position}
		/>
	);
};

module.exports = ShoppingHeader;
