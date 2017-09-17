import React from "react";
import { Entity, Scene } from "aframe-react";

const Item = ({ price, name, modelUrl, position, onMousedown, onMouseenter, onMouseleave, inCart }) => {
	return (
		<Entity
			obj-model={`obj: #${modelUrl}.obj; mtl: #${modelUrl}.mtl`}
			events={{
				mousedown: onMousedown,
				mouseenter: onMouseenter,
				mouseleave: onMouseleave,
				triggerdown: onMousedown
			}}
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
			<a-image src="url(images/shadow.png)" rotation="-90 0 0" scale="0.5 0.5 0.5"></a-image>
        </Entity>
			
	);
};

export default Item;
