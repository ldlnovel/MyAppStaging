
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
process.env.NODE_ENV = 'development';
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
		contentBase: './dist',   　　//指定服务开启的位置，在dist文件夹中
		historyApiFallback: true,  //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，任意的 404 响应都可能需要被替代为 index.html
		inline: true,              //实时刷新
		port: 8000,                 //默认8080
		proxy: {                    //代理属性
			"/api": {
				target: 'http://localhost:9000/',
				pathRewrite: { "^/api": "" }
				/* 因为在 ajax 的 url 中加了前缀 '/api'，而原本的接口是没有这个前缀的
				所以需要通过 pathRewrite 来重写地址，将前缀 '/api' 转为 '' */
			}
		}
	},
	plugins: [
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
	],	
})