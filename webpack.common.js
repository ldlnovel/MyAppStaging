const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	module: {
		rules: [
			// 编译es6和编译jsx和js
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						plugins: [
							["import", { "libraryName": "antd", "style": true }],
						]
					}
				},
			},
			//配置图片
			{
				test: /\.(jpg|png|gif|jpeg|bmp)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192    //限制图片的大小
					}
				}
			},
			//配置字体图标
			{
				test: /\.(png|woff|woff2|svg|ttf|eot)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,  //限制大小10k
					}
				}
			},
			//配置css  postcss-loader（自动补全浏览器兼容） /// less@3 +++  需要 javascriptEnabled: true 实现 antd 按需加载
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					{ loader: 'postcss-loader', options: { ident: "postcss", plugins: [require("autoprefixer")("last 100 versions")] } },
					{ loader: 'less-loader', options: { javascriptEnabled: true } }
				]
			},
			{
				test: /\.less$/,
				use: [
					"style-loader",
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					{ loader: 'postcss-loader', options: { ident: "postcss", plugins: [require("autoprefixer")("last 100 versions")] } },
					{ loader: 'less-loader', options: { javascriptEnabled: true } }
				]

			}
		]
	},
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			container: path.resolve(__dirname, 'src/container/'),
			utils: path.resolve(__dirname, 'src/utils/'),
		}
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		//利用webpack-html-plugin这个插件它可以生成html文件到指定的目录下，这样就可以不用再根目录下建立页面文件了，直接在src下建立模板文件，
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html'  //默认会在dist路径下生成index.html并引用所有的静态资源
		})
	],
};