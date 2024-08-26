// App Config
const { APP_CONFIG, APP_META } = require('./app');

// Plugins
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: require('path').resolve(__dirname, APP_CONFIG.PATH.ENTRY)
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			},
			{
				test: /\.(png|jpe?g|gif|webm|mp4|mov|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: APP_CONFIG.PATH.OUTPUT,
					esModule: false
				}
			},
			{
				test: /\.(html)$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(), new HtmlWebpackPlugin({
			template: APP_CONFIG.PATH.TEMPLATE,
			alwaysWriteToDisk: true,
			meta: APP_META,
			minify: {
				removeComments: false,
				collapseWhitespace: true
			}
		})
	],
	resolve: {
		alias: {
			vue: '@vue/runtime-dom'
		},
		extensions: ['.*',
			'.js',
			'.vue',
			'.json']
	},
	optimization: {
		moduleIds: 'deterministic',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					priority: -10,
					chunks: 'all'
				}
			}
		}
	}
};
