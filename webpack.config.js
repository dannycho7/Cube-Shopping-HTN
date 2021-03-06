const path = require("path");

module.exports = {
	entry: path.join(__dirname, "client/index.js"),
	output: {
		path: path.join(__dirname, "static/js"),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	devtool: process.env.NODE_ENV === "production" ? "none" : "source-map"
};