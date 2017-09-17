import React from "react";
import { Entity, Scene } from "aframe-react";

const Item = ({ price, name, modelUrl, position, onMousedown, inCart }) => {
	return (
		<Entity
			obj-model={`obj: url(models/${modelUrl}.obj); mtl: url(models/${modelUrl}.mtl)`}
			events={{ mousedown: onMousedown }}
			position={position}
		/>
	);
};

export default Item;
