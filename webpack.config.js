const path = require( 'path' );

module.exports = ( env, options ) => {
	return {
		entry: {
			'background-bundle':'./src/background.js',
			'content-bundle':'./src/content.js'
		},
		output: {
		  path: path.resolve(__dirname, 'dist'),
		  filename: '[name].js'
		}
	};
};
