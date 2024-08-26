module.exports = {
	configureWebpack: {
		devServer: {
			historyApiFallback: true
		}
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: '@import "@/scss/global.scss"'
			}
		}
	}
};
