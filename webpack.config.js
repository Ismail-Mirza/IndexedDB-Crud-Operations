const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.[contenthash].js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/html/index.html",
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				//first style loader than css-loader
			},
		],
	},
};

// for sass css
// use: ["style-loader", 3rd
//     "css-loader", 2nd
//     "sass-loader"], 1st
