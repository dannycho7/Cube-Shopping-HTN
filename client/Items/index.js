import React from "react";
import Item from "./presenters/Item";

import { Entity } from "aframe-react";

function getPositionString(positionNumber, levelHeight, numPositions, radius) {
	var level = parseInt(positionNumber / numPositions);
	var place = (positionNumber - 1) % numPositions;
	return radius * Math.cos(place * 2 * Math.PI/numPositions) + " " + level * levelHeight + " " + radius * Math.sin(place * 2 * Math.PI / numPositions);
};

class Items extends React.Component {
	constructor() {
		super();

		this.state = {
			inventory: [],
			cart: []
		}
	}

	componentDidMount() {
		var xhttp = new XMLHttpRequest();

		xhttp.addEventListener("load", () => {
			let inventory = JSON.parse(xhttp.responseText);
			this.setState({ inventory  });
		});

		xhttp.open("GET", "/items");
		xhttp.send();
	}

	render() {
		const { inventory } = this.state;
		let inventory_component = inventory.map((item, index) => {
			return <Item {...item} position={getPositionString(index + 1, 2, 6, 2)} key={index} />
		});

		return <Entity>{inventory_component}</Entity>
	}
}

export default Items;
