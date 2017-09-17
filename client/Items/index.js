import React from "react";
import Item from "./presenters/Item";

import { Entity } from "aframe-react";

function getPositionString(positionNumber, levelHeight, numPositions, radius) {
	var level = parseInt(positionNumber / numPositions);
	var place = (positionNumber - 1) % numPositions;
	return radius * Math.cos(place * 2 * Math.PI/numPositions) + " " + level * levelHeight + " " + radius * Math.sin(place * 2 * Math.PI / numPositions);
};

function turnArrayIndicesIntoObject(arr) {
	let obj = {}
	for(let i = 0; i < arr.length; i++) {
		obj[i] = false;
	}
	return obj;
}

class Items extends React.Component {
	constructor() {
		super();

		this.state = {
			inventory: [],
			cart: {}
		}
	}

	componentDidMount() {
		var xhttp = new XMLHttpRequest();

		xhttp.addEventListener("load", () => {
			let inventory = JSON.parse(xhttp.responseText);
			let initialCart = turnArrayIndicesIntoObject(inventory);
			this.setState({ inventory, cart: initialCart });
		});

		xhttp.open("GET", "/items");
		xhttp.send();
	}

	render() {
		const { inventory, cart } = this.state;
		let inventory_component = inventory.map((item, index) => {
			return (
				<Item
					{...item}
					position={getPositionString(index + 1, 2, 6, 2)}
					onMousedown={() => this.setState({ cart: Object.assign({}, cart, { [index]: !cart[index] }) })}
					inCart={cart[index]}
					key={index}
				/>
			);
		});

		return <Entity>{inventory_component}</Entity>
	}
}

export default Items;
