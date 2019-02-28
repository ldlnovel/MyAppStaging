const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = 'production';
module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}),
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash:8].js',
		chunkFilename: 'js/[chunkhash:8].chunk.js',
		publicPath: './'
	},
	// 代码优化：合并以及压缩代码
	// https://webpack.js.org/configuration/optimization/#optimization-minimize
	optimization: {
		minimizer: [
			new UglifyJSPlugin({ /// 压缩js
				uglifyOptions: {
					output: {
						//输出去掉注释
						comments: true
					},
					//输出不显示警告
					compress: {
						warnings: true,
						drop_debugger: true,
						drop_console: true
					}
				}
			}),
		],
		splitChunks: { /// 提取 公共代码
			cacheGroups: {
				commons: {
					name: "commons",
					chunks: "initial",
					minChunks: 2
				}
			}
		}
	},
});

