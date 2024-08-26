const APP_PATH = require('./app.path');
const METAS = require('./app.meta');

module.exports = {
	PATH: {
		OUTPUT: `${APP_PATH.output}`,
		ENTRY: `${APP_PATH.src}/main.js`,
		TEMPLATE: `${APP_PATH.src}/public/index.html`,
		COMPONENT: `${APP_PATH.src}/views`
	},
	OUTPUT: {
		CSS: '[name].css',
		JS: '[name].[contenthash].js'
	},
	METAS
};
