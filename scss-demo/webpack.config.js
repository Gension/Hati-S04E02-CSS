const path = require('path');
module.exports = {
    entry: './src/app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 9000
    }
}