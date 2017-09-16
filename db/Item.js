const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var itemSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	modelUrl: {
		type: String,
		required: true
	},
	"itemType": {
		type: String
	}
});

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;
