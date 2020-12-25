const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    // mode: "development || "production",
    entry: {
        renderer: path.join(__dirname, 'example.js')
    },
    output: {
        filename: '[name]-out.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                use: (info) => {
                    console.log("################", info.realResource)
                    return []

                }
            },
            {
                test: /\.css$/,
                loader: "css-loader"
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {

                    }
                }
            },
        ]
    },
    optimization: {
        minimize: false,
    },
    plugins: [
        // Try commenting out the next line
        new VueLoaderPlugin(),
    ]
};