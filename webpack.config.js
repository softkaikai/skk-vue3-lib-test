const path = require('path');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'skk',
        libraryTarget: 'umd',
        filename: 'skk.js',
        auxiliaryComment: 'Test Comment'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules | lib/,
                options: { appendTsSuffixTo: [/\.vue$/] }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'vue-style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 20000,
                    name: 'fonts/[name]-[hash].[ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 20000,
                    name: 'images/[name]-[hash].[ext]'
                }
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.vue']
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
}
