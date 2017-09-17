import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Entity } from "aframe-react";

import Item from "./presenters/Item";
import { grabItems, toggleItem } from "../../actions/itemActions";

function getPositionString(positionNumber, levelHeight, numPositions, radius) {
	var level = parseInt(positionNumber / numPositions);
	var place = (positionNumber - 1) % numPositions;
	return radius * Math.cos(place * 2 * Math.PI/numPositions) + " " + level * levelHeight + " " + radius * Math.sin(place * 2 * Math.PI / numPositions);
};


class Items extends React.Component {
	componentDidMount() {
		this.props.grabItems();
	}
	render() {
		const { inventory, cart } = this.props;
		let inventory_component = inventory.map((item, index) => {
			return (
				<Item
					{...item}
					position={getPositionString(index + 1, 2, 6, 2)}
					onMousedown={() => this.props.toggleItem(index)}
					inCart={cart[index]}
					key={index}
				/>
			);
		});

		return <Entity>{inventory_component}</Entity>
	}
}

const mapStateToProps = (state) => {
	const { item } = state;
	return item;
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		toggleItem,
		grabItems
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
