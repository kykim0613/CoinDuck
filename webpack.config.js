const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/build/',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        [
                            '@babel/preset-react',
                            { 'runtime': 'automatic' }
                        ]
                    ],
                },
            },
        ],
    },
    plugins: [
        new webpack.providePlugin({
            Chart: ['chart.js', 'Chart'],
            'window.Chart': ['chart.js', 'Chart']
        })
    ],
    resolve: {
        extenstions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/public'),
        },
        open: true,
        compress: true,
        port: 3000,
    },
    devtool: "source-map",
}