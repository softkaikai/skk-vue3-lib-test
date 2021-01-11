const path = require('path');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/components/Add/index.ts'),
    output: {
        path: path.resolve(__dirname, '../lib/es'),
        library: 'AddComponent',
        libraryTarget: 'umd',
        filename: 'AddComponent.js',
        auxiliaryComment: 'Test Comment'
    },
    externals: {
        vue: {
            commonjs: 'vue',
            commonjs2: 'vue',
            root: 'Vue'
        }
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
                options: { appendTsSuffixTo: [/\.vue$/] }
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
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.vue']
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ]
}
