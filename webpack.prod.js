
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const pkg = require('./package.json')
// const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = 'production';
module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}),
		// 提取公共css文件
		new ExtractTextPlugin({
			filename: 'css/[name].css',
		}),
	],
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

