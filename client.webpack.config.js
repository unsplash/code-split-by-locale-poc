const crypto = require("crypto");
const path = require("path");

module.exports = {
    mode: "development",
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

                enUS: {
                    test: /lang\/en-US/,
                    name: "enUS",
                    // name: (module, chunks, cacheGroupKey) => {
                    //     const moduleFileName = module
                    //         .identifier()
                    //         .split("/")
                    //         .reduceRight((item) => item);
                    //     // TODO:
                    //     // eslint-disable-next-line local/no-array-join-method
                    //     const _allChunksNames = chunks
                    //         .map((item) => item.name)
                    //         .join("~");
                    //     const allChunksNames = crypto
                    //         .createHash("md5")
                    //         .update(_allChunksNames)
                    //         .digest("hex");
                    //     return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
                    // },
                },

                esES: {
                    test: /lang\/es-ES/,
                    name: "esES",
                },
            },
        },
    },
};
