import React from "react";

const ShoppingHeader = ({ position }) => {
	return (
		<a-entity
			text="value: Shopping cart; color: black; anchor: left; wrapCount: 60;"
			position={position}
		/>
	);
};

module.exports = ShoppingHeader;
