const PlaceWebpackPreset = require('@place-framework/place-webpack-preset');

module.exports = (env) => {
	return new PlaceWebpackPreset({
		config: require('./webpack.vue.config'),
		output: require('./webpack.output'),
		env
	});
};
