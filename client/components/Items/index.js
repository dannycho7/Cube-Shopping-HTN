import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Entity } from "aframe-react";

import Item from "./presenters/Item";
import { grabItems, toggleItem } from "../../actions/itemActions";

var itemCount = {
	shirts: 0,
	pants: 0,
	shoes:  0
};

function getPositionString(itemType) {
	var positionString = "";
	switch (itemType) {
		case "t-shirt":
			positionString = (3 - 0.6 * itemCount.shirts) + " 1 " + (0.75 * itemCount.shirts);
			itemCount.shirts += 1;
		break;
		case "pants":
			positionString = (-3 + itemCount.pants * 0.5) + " 0.5 " + (0.75 * itemCount.pants);
			itemCount.pants += 1;
		break;
		case "shoe":
			positionString = (-1 + itemCount.shoes * 0.5) + " 1.5 -2";
			itemCount.shoes += 1; 
		break;
	}
	return positionString;
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
					position={getPositionString(item.itemType)}
					onMousedown={() => this.props.toggleItem(index)}
					inCart={cart[index]}
					key={index}
				>
					<a-image src="url(images/shadow.png)" rotation="-90 0 0" scale="0.5 0.5 0.5"></a-image>
				</Item>
			);
		});

		itemCount = {
			shirts: 0,
			pants: 0,
			shoes:  0
		} 

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
