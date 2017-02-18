module.exports = {
	entry: [
		'./src/index.js'
	],
	// output.filename => specfies the name of the output file
	// output.path => determines the location on disk the files are written
	output: {
		filename: 'bundle.js',
		path: __dirname,
		publicPath: '/'
	},
	module: {
	  loaders: [{
	  	exclude: /node_modules/,
	  	loader: 'babel-loader',
	  	query: {
	  	  presets: ['react', 'es2015', 'stage-1']
	  	}
	  }]
	},
	// An array of extensions used to resolve modules
	// 
	resolve: {
	  extensions: ['.js', '.jsx']
	},
	// Configure the behavior of the webpack-dev-server
	// when the webpack config is passed to the
	// webpack-dev-server CLI
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
}