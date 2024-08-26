// App Config
const { APP_CONFIG } = require('./app');
const ESLINT_CONFIG = require('@place-framework/place-webpack-preset/config').ESLINT_CONFIG;

const ADDL_CONFIG = [
	{
		ignores: [`${APP_CONFIG.PATH.OUTPUT}/**`, 'node_modules/**']
	}
];

module.exports = ESLINT_CONFIG.concat(ADDL_CONFIG);
