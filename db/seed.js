const mongoose = require("mongoose");
const Item = require("./Item");

mongoose.connect("mongodb://localhost/htn", { useMongoClient: true }, () => console.log("Mongodb connection established"));

Item.create({
	name: "test-name",
	price: "1",
	description: "test",
	modelUrl: "..."
}, () => console.log("Created an item"));	
