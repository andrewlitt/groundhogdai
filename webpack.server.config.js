var nodeExternals = require('webpack-node-externals');

module.exports = {
	devtool: 'inline-source-map',
	context: __dirname + '/src',
	entry: './server.js',
	output: {
		path: __dirname + '/dist',
		filename: 'server.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				},
				externals: [nodeExternals()]
			}
		]
	},
	target: 'node',
	node: {
	    console: 'empty',
	    fs: 'empty',
	    net: 'empty',
	    tls: 'empty',
	    __dirname: false,
	    __filename: false
	  }
}
