import React from "react";

const ShoppingCartCurrentItemDescription = ({ currentItem, position }) => {
	return (
		<a-entity
			text={`value: ${currentItem["name"]}\n price: $${currentItem["price"]}\n\n${currentItem["description"]};
					color: black; anchor: left; wrapCount: 90` }
			position={position}
		/>
	);
};

export default ShoppingCartCurrentItemDescription;
