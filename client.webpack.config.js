const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",

    // Prevent eval(…)
    devtool: "source-map",
    entry: "./src/client.js",
    output: {
        path: path.join(__dirname, `dist-client`),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-react"]],
                    },
                },
            },
        ],
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    // BEGIN DEFAULTS
                    // https://cs.github.com/webpack/webpack/blob/753fdea847fafe2f1a7e1cb2324e5f7cafa63c83/lib/config/defaults.js#L1127
                    compress: {
                        passes: 2,
                    },
                    // END DEFAULTS

                    mangle: false,
                    output: {
                        beautify: true,
                    },
                },
            }),
        ],

        runtimeChunk: {
            name: "runtime",
        },

        splitChunks: {
            chunks: "all",
            minSize: 0,
            maxAsyncRequests: 20,
            maxInitialRequests: 25,

            cacheGroups: {
                defaultVendors: false,

                framework: {
                    chunks: "all",
                    name: "framework",
                    test: /node_modules/,
                },
            },
        },
    },
};
