module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'reactrouter.js'
    },
    devServer: {
        inline: true,
        host: '0.0.0.0'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            {test : /\.scss|css$/, loader : 'style-loader!css-loader!sass-loader'},
            { test : /\.jpe?g|png|gif|ttf|svg|eot|woff|woff2$/, loader : 'url-loader'}
        ]
    }
}