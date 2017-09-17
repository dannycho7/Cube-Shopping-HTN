const mongoose = require("mongoose");
const Item = require("./Item");

mongoose.connect("mongodb://localhost/htn", { useMongoClient: true }, () => console.log("Mongodb connection established"));

Item.create([
{
	"name": "Cheap Shirt",
	"price": 10,
	"description": "This is a shirt",
	"modelUrl": "shirt_blue",
	"itemType": "t-shirt"
},
{
	"name": "Somewhat Cheap Shirt",
	"price": 4,
	"description": "Shirts are widely available",
	"modelUrl": "shirt_green",
	"itemType": "t-shirt"
},
{
	"name": "Shirt",
	"price": 12,
	"description": "This is a regular shirt",
	"modelUrl": "shirt_grey",
	"itemType": "t-shirt"
},
{
	"name": "Somewhat Expensive Shirt",
	"price": 25,
	"description": "Very high quality",
	"modelUrl": "shirt_orange",
	"itemType": "t-shirt"
},
{
	"name": "Expensive Shirt",
	"price": 70,
	"description": "You must shower in gold as well.",
	"modelUrl": "shirt_red",
	"itemType": "t-shirt"
},
{
	"name": "Fake Yeezys",
	"price": 100,
	"description": "This is definitely illegal",
	"modelUrl": "shoes_blue",
	"itemType": "shoe"
},
{
	"name": "Somewhat Real Yeezys",
	"price": 500,
	"description": "This is a little sketchy",
	"modelUrl": "shoes_brown",
	"itemType": "shoe"
},
{
	"name": "Yeezys",
	"price": 1000,
	"description": "This is a collector's item",
	"modelUrl": "shoes_green",
	"itemType": "shoe"
},
{
	"name": "Kanye Signed these",
	"price": 100000,
	"description": "This is an overpriced shoe",
	"modelUrl": "shoes_red",
	"itemType": "shoe"
},
{
	"name": "Sketchers",
	"price": 30,
	"description": "This is a childhood treasure",
	"modelUrl": "shoes_white",
	"itemType": "shoe"
},
{
	"name": "Cheap Pants",
	"price": 20,
	"description": "You pay for what you get",
	"modelUrl": "pants_blue",
	"itemType": "pants"
},
{
	"name": "Levi's Jeans",
	"price": 50,
	"description": "Very Durable Jeans",
	"modelUrl": "pants_brown",
	"itemType": "pants"
},
{
	"name": "Disco Jeans",
	"price": 70,
	"description": "Are you looking to party?",
	"modelUrl": "pants_green",
	"itemType": "pants"
},
{
	"name": "Somewhat Expensive Pants",
	"price": 150,
	"description": "You must be headed for an interview",
	"modelUrl": "pants_white",
	"itemType": "pants"
},
{
	"name": "Expensive Pants",
	"price": 250,
	"description": "You're probably conducting interviews",
	"modelUrl": "pants_pink",
	"itemType": "pants"
}], () => console.log("Created an item"));	
