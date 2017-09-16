global.Promise = require("bluebird");
const http = require("http");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/htn", { useMongoClient: true })
.then(() => console.log("Mongodb connection established"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "static")));

let Item = require("./db/Item");

app.get("/", (req, res) => {
	Item.find({}, (err, items) => {
		return res.render("index", { items });
	});
});

app.get("/items", (req, res) => {
	Item.find({}, (err, items) => {
		if(err) throw err;
		return res.send(JSON.stringify(items));
	});
});

app.get("/callback", (req, res) => {
	console.log(req.query);
	let callback_data = JSON.parse(req.query["data"]);
	switch(callback_data["status"]) {
		case "error": {
			return res.send(`Error in transaction ${callback_data["error_code"]}`)
		}
		case "ok": {
			return res.send("Success!");
		}
		default: {
			return res.send("default");
		}
	}
});

http.createServer(app).listen(5000, () => console.log("Server listening in on port 5000"));