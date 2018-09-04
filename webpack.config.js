const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (function createWebpackConfig() {
  const prod = process.env.NODE_ENV === 'production' || false;
  const dev = !prod;
  const buildDir = path.join(__dirname, 'build');
  const projDir = path.join(__dirname, 'src');
  const commonDir = path.join(projDir, 'common');

  const devPlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]

  const prodPlugins = [
    new MiniCssExtractPlugin({
      filename: 'main-[contenthash].css',
      allChunks: true
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]

  return {
    entry: path.join(projDir, 'index.js'),

    output: {
      path: buildDir,
      sourceMapFilename: '[name].map',
      filename: `[name]-[${dev ? 'hash' : 'chunkhash'}].js`
    },
  
    resolve: {
      modules: ['src', 'node_modules'],
      extensions: ['.js', '.jsx', '.css', '.scss'],
      alias: {
        actions: path.join(commonDir, 'actions'),
        reducers: path.join(commonDir, 'reducers'),
        assets: path.join(commonDir, 'assets'),
        components: path.join(commonDir, 'components'),
        styles: path.join(commonDir, 'styles'),
        commonStyles: path.join(commonDir, 'styles', 'common.scss')
      }
    },
  
    cache: dev,
  
    devtool: dev ? 'cheap-module-source-map' : false,
  
    stats: {
      colors: true,
      reasons: true,
      hash: Boolean(prod),
      version: Boolean(prod),
      timings: true,
      chunks: Boolean(prod),
      chunkModules: Boolean(prod),
      cached: Boolean(prod),
      cachedAssets: Boolean(prod)
    },
  
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(projDir, 'index.template.html'),
        title: 'ULM',
        // favicon: path.join(
        //   commonDir,
        //   'assets',
        //   'favicon.ico'
        // ),
        inject: false,
        minify: {
          removeComments: Boolean(prod),
          collapseWhitespace: Boolean(prod),
          removeRedundantAttributes: Boolean(prod),
          useShortDoctype: Boolean(prod),
          removeEmptyAttributes: Boolean(prod),
          removeStyleLinkTypeAttributes: Boolean(prod),
          keepClosingSlash: Boolean(prod),
          minifyJS: Boolean(prod),
          minifyCSS: Boolean(prod),
          minifyURLs: Boolean(prod)
        },
        baseUrl: dev ? '' : "location.protocol + '//' + location.host"
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          API_URL: JSON.stringify(process.env.API_URL)
        }
      }),
      new webpack.ProvidePlugin({
        React: 'react',
        classNames: 'classnames'
      })
    ].concat(dev ? devPlugins : prodPlugins),

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: dev
            }
          }
        },
        {
          test: /\.s?css$/,
          exclude: [/node_modules/],
          use: [
            dev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                minimize: Boolean(prod),
                localIdentName: dev ? '[path][name]__[local]' : '',
                modules: true,
                sourceMap: dev
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: dev
              }
            }
          ]
        },
        {
          test: /\.html$/,
          exclude: [
            /node_modules/,
            path.join(__dirname, 'src', 'index.template.html')
          ],
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
      ]
    },
  }
})();
