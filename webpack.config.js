// Webpack ver. 2.2
// webpack.js.org/concepts

const path = require('path');

// console.log(__dirname) => /Users/jstowers/Documents/Coding/Webpage
console.log('__dirname', path.join(__dirname + '/out'));

module.exports = {

	// entry creates a graph of all app dependencies
	entry: [
		'./src/index.js'
	],
	// output.filename => specfies the name of the output file
	// output.path (absolute) => determines the location on disk the files are written to
	// __dirname => the directory where the currently executing script resides
	output: {
		filename: 'bundle.js',
		path: __dirname,
		publicPath: '/'
	},
	// configuration regarding modules
	/*
	module: {
	  rules: [
		{
				use: [{loader:'babel-loader'}],
				exclude: /node_modules/
		}
	  ]
	}
	*/
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