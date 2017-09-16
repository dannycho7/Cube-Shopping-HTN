const mongoose = require("mongoose");
const Item = require("./Item");

mongoose.connect("mongodb://localhost/htn", { useMongoClient: true }, () => console.log("Mongodb connection established"));

Item.create([
{
	"name": "Shirt",
	"price": 1000,
	"description": "This is a shirt",
	"modelUrl": "...",
	"itemType": "t-shirt"
},
{
	"name": "Yeezys",
	"price": 100000,
	"description": "This is an overpriced shoe",
	"modelUrl": "...",
	"itemType": "t-shirt"
},
{
	"name": "Pants",
	"price": 2500,
	"description": "This is pants",
	"modelUrl": "....",
	"itemType": "pants"
}], () => console.log("Created an item"));	
