var webpack = require('webpack');
var path = require('path');
var PACKAGE = require('../package.json');
var banner = `/**\n* ${PACKAGE.description} v${PACKAGE.version}\n* Date: ${new Date()}\n**/`;

module.exports = [
    {
        entry: {
            'removal-main': '../src/content/removal-main.js'
        },
        output: {
            publicPath: '/',
            filename: 'out/[name].js',
            libraryTarget: "var",
            library: 'contentRemoval'
        },
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname, '../src/content'),
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                }
            ]
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                debug: true
            }),
            new webpack.BannerPlugin({
                banner: banner,
                raw: true,
                entryOnly: true
            })
        ]
    }
    // {
    //     entry: {
    //         'prism-background-page': './src/chrome/prism/prism-background.js'
    //     },
    //     output: {
    //         publicPath: '/',
    //         filename: 'out/[name].js',
    //         libraryTarget: "var",
    //         library: 'prismBackgroundPage'
    //     },
    //     devtool: 'source-map',
    //     module: {
    //         loaders: [
    //             {
    //                 test: /\.js$/,
    //                 include: path.join(__dirname, '../src/chrome/prism'),
    //                 loader: 'babel-loader',
    //                 query: {
    //                     presets: ['es2015']
    //                 }
    //             }
    //         ]
    //     },
    //     plugins: [
    //         new webpack.LoaderOptionsPlugin({
    //             debug: true
    //         }),
    //         new webpack.BannerPlugin({
    //             banner: banner,
    //             raw: true,
    //             entryOnly: true
    //         })
    //     ]
    // }

];
