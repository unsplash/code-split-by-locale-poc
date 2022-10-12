const path = require("path");
const webpack = require("webpack");

module.exports = {
    target: "node",

    mode: "production",
    devtool: "source-map",
    entry: "./src/server.js",
    output: {
        path: path.join(__dirname, `dist-server`),
    },

    plugins: [
        new webpack.DefinePlugin({
            __CLIENT__: false,
        }),
    ],

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
};
