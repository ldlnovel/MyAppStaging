
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
		//提取css文件
		new ExtractTextPlugin({
			filename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
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
						comments: false
					},
					//输出不显示警告
					compress: {
						warnings: false,
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

