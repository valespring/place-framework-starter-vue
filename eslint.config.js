// App Config
const { APP_CONFIG } = require('./app');
const ESLINT_CONFIG = require('@place-framework/place-webpack-preset/config').ESLINT_CONFIG;
const VUE_PLUGIN = require('eslint-plugin-vue');

const ADDL_CONFIG = [
	{
		files: [ '*.vue', '**/*.vue' ],
		rules: {
			"vue/html-indent": ["error", "tab"],
			"vue/script-indent": ["error", "tab", { "baseIndent": 1 }]
		}
	},
	VUE_PLUGIN.configs['flat/recommended']
];

module.exports = [].concat(...ESLINT_CONFIG, ...ADDL_CONFIG);
