const { defineConfig } = require('@vue/cli-service')
const Dotenv = require('dotenv-webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const { VuetifyPlugin } = require('webpack-plugin-vuetify')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new VuetifyPlugin({
        autoImport: true,
      }),
      new Dotenv(),
      new NodePolyfillPlugin(),
    ],
    resolve: {
      fallback: {
        fs: false,
      },
    },
  },
})
