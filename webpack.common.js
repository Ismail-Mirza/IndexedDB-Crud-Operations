


module.exports = {
	entry: {
		main: "./src/index.js",
		vendor: "./src/lib.js",
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.(svg|jpg|png|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "img",
					},
				},
			},
		],
	}
};

// for sass css
// use: ["style-loader", 3rd
//     "css-loader", 2nd
//     "sass-loader"], 1st
