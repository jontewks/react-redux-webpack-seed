module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: '/build/bundle.js',
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015'],
			},
		}, {
			test: /\.scss$/,
			loaders: [
				'style',
				'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
				'sass',
			],
		}],
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.html'],
	},
	devtool: 'cheap-module-source-map',
}
