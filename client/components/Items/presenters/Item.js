import React from "react";
import { Entity, Scene } from "aframe-react";

const Item = ({ price, name, modelUrl, position, onMousedown, inCart }) => {
	return (
		<Entity
			obj-model={`obj: url(models/${modelUrl}.obj); mtl: url(models/${modelUrl}.mtl)`}
			events={{ mousedown: onMousedown }}
			position={position}
		>
			<a-animation
				attribute="rotation"
            	dur="5000"
            	easing="linear"
            	direction={ Math.random() > 0.5 ? "normal" : "reverse" }
            	fill="forwards"
            	to="0 360 0"
            	repeat="indefinite"
            />
        </Entity>
			
	);
};

export default Item;
