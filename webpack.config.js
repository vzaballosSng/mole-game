import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';

export default {
	mode: isProduction ? 'production' : 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '_site'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: Infinity,
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'public', to: 'public' },
				{ from: 'sw.js', to: 'sw.js' },
				{ from: 'common.css', to: 'common.css' },
			],
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		server: 'https',
		compress: true,
		port: 8001,
		historyApiFallback: true,
		hot: false,
	},
};
