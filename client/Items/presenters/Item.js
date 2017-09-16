import React from "react";
import { Entity, Scene } from "aframe-react";

const Item = ({ price, name, position }) => {
	return (
		<Entity
			geometry={{ primitive: "box", width: 0.5, height: 0.5, depth: 0.5 }}
			material={{color: "tomato"}}
			onClick={() => console.log("Clicked")}
			position={position}
		/>
	);
};

export default Item;
