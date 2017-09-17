import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Entity } from "aframe-react";

import Item from "./presenters/Item";
import { grabItems, toggleItem, toggleCurrent } from "../../actions/itemActions";

var itemCount = {
	shirts: 0,
	pants: 0,
	shoes:  0
};

function getPositionString(itemType) {
	var positionString = "";
	switch (itemType) {
		case "t-shirt":
			positionString = (3 - 0.6 * itemCount.shirts) + " 0.05 " + (0.75 * itemCount.shirts);
			itemCount.shirts += 1;
		break;
		case "pants":
			positionString = (-3 + itemCount.pants * 0.5) + " 0.04 " + (0.75 * itemCount.pants);
			itemCount.pants += 1;
		break;
		case "shoe":
			positionString = (-1 + itemCount.shoes * 0.5) + " 0.03 -2";
			itemCount.shoes += 1; 
		break;
	}
	return positionString;
};


class Items extends React.Component {
	shouldComponentUpdate(nextProps) {
		let should = false;
		const { inventory } = this.props;
		nextProps.inventory.forEach((inventory_item, index) => {
			if(inventory[index] !== inventory_item) {
				should = true;
			}
		});
		return should;
	}
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
					onMouseenter={() => this.props.toggleCurrent(index)}
					onMouseleave={() => this.props.toggleCurrent()}
					inCart={cart[index]}
					key={index}
				/>
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
		toggleCurrent,
		grabItems
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
