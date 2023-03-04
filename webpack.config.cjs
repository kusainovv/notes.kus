const HtmlWebpackPlugin = require('html-webpack-plugin');
const {HotModuleReplacementPlugin} = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		clean: true,
	},

	devServer: {
		port: 8080,
		static: './dist',
		historyApiFallback: true,
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.jpg', '.png'],
		alias: {
			sections: path.resolve(__dirname, 'public/sections'),
		},
	},

	module: {
		rules: [
			{
				test: /\.(tsx|ts)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-typescript', '@babel/preset-react'],
					},
				},
			},

			{
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
			},

			{
				test: /\.html$/i,
				loader: 'html-loader',
			},

			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},

			{
				test: /\.(png|jpe?g|gif|ttf|svg|webp)$/i,
				type: 'asset/resource',
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({template: './public/index.html'}),
		new HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin(),
	],
};
