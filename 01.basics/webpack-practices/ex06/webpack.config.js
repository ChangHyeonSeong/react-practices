const path = require('path');

module.exports ={
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/i,
            use:['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        }]
    },
    devtool: "eval-source-map",  //번들된 코드에서 오류를 표시하는것을 방지하기위해 원래소스와 번들링된 소스를 맵핑해준다 -> 디버그를 위한 필수 속성
    devServer: {
        host: '0.0.0.0',
        port: 9999,
        // inline: true
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}