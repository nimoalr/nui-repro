const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, 'dist'),
    filenameHashing: false,
    productionSourceMap: false,
    publicPath: './',
    chainWebpack: (config) => {
        config.optimization.splitChunks(false);
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 20480 }));
    },
};