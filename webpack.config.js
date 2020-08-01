const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devServer: {
		open: true,
      stats: 'errors-only'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'WDS auto-reload',
		}),
	],
};
