

var config = {

    watchOptions: {
        ignored: '/node_modules/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,

                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }
            }
        ]
    }

}

var bundle = Object.assign({}, config, {

    entry: {
        'main': './resources/js/app.js'
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/public/js'
    },
})

module.exports = [bundle];