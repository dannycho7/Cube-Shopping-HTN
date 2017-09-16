const mongoose = require("mongoose");
const Item = require("./Item");

mongoose.connect("mongodb://localhost/htn", { useMongoClient: true }, () => console.log("Mongodb connection established"));

Item.create([
{
	"name": "Cheap Shirt",
	"price": 10,
	"description": "This is a shirt",
	"modelUrl": "...",
	"itemType": "t-shirt"
},
{
	"name": "Somewhat Cheap Shirt",
	"price": 11,
	"description": "This is a shirt",
	"modelUrl": "...",
	"itemType": "t-shirt"
},
{
	"name": "Shirt",
	"price": 12,
	"description": "This is a shirt",
	"modelUrl": "...",
	"itemType": "t-shirt"
},
{
	"name": "Somewhat Expensive Shirt",
	"price": 13,
	"description": "This is a shirt",
	"modelUrl": "...",
	"itemType": "t-shirt"
},
{
	"name": "Expensive Shirt",
	"price": 14,
	"description": "This is a shirt",
	"modelUrl": "...",
	"itemType": "t-shirt"
},
{
	"name": "Cheap Yeezys",
	"price": 100000,
	"description": "This is an overpriced shoe",
	"modelUrl": "...",
	"itemType": "shoe"
},
{
	"name": "Somewhat Cheap Yeezys",
	"price": 100001,
	"description": "This is an overpriced shoe",
	"modelUrl": "...",
	"itemType": "shoe"
},
{
	"name": "Yeezys ",
	"price": 100002,
	"description": "This is an overpriced shoe",
	"modelUrl": "...",
	"itemType": "shoe"
},
{
	"name": "Somewhat Expensive Yeezys",
	"price": 100003,
	"description": "This is an overpriced shoe",
	"modelUrl": "...",
	"itemType": "shoe"
},
{
	"name": "Expensive Yeezys",
	"price": 100004,
	"description": "This is an overpriced shoe",
	"modelUrl": "...",
	"itemType": "shoe"
},
{
	"name": "Cheap Pants",
	"price": 20,
	"description": "This is pants",
	"modelUrl": "....",
	"itemType": "pants"
},
{
	"name": "Somewhat Cheap Pants",
	"price": 21,
	"description": "This is pants",
	"modelUrl": "....",
	"itemType": "pants"
},
{
	"name": "Pants",
	"price": 22,
	"description": "This is pants",
	"modelUrl": "....",
	"itemType": "pants"
},
{
	"name": "Somewhat Expensive Pants",
	"price": 23,
	"description": "This is pants",
	"modelUrl": "....",
	"itemType": "pants"
},
{
	"name": "Expensive Pants",
	"price": 24,
	"description": "This is pants",
	"modelUrl": "....",
	"itemType": "pants"
}], () => console.log("Created an item"));	
