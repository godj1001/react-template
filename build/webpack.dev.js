const webpack = require('webpack')
const {merge} = require('webpack-merge')

const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig,{
  mode: 'development',
  devServer:{
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true,
    compress: true,
    proxy: {

    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'eval-source-map'
})
