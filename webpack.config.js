const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/src",
		filename: "bundle.js"
	},
	devServer: {
		inline: true,
		contentBase: './src',
		port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["latest", "stage-0", "react"]
				}
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	}/*,
	plugins: [
		new UglifyJSPlugin()
	]*/
}







