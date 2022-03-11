const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
    // rules: [
    //     {
    //         test: /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/,
    //         loaders: {
    //             loader: 'file-loader',
    //             options: {
    //                 name: '[path][name].[ext]?[hash]',
    //                 context: 'resources/assets',
    //             }
    //         },
    //     }
    // ]


};
