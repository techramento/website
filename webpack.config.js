import path from 'path'

import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { phenomicLoader } from 'phenomic'
import PhenomicLoaderFeedWebpackPlugin
  from 'phenomic/lib/loader-feed-webpack-plugin'
import PhenomicLoaderSitemapWebpackPlugin
  from 'phenomic/lib/loader-sitemap-webpack-plugin'

import pkg from './package.json'

export default (config = {}) => {
  // Hot loading for postcss config
  // Until this is officially supported
  // https://github.com/postcss/postcss-loader/issues/66
  const postcssPluginFile = require.resolve('./postcss.config.js')
  const postcssPlugins = (webpackInstance) => {
    webpackInstance.addDependency(postcssPluginFile)
    delete require.cache[postcssPluginFile]
    return require(postcssPluginFile)(config)
  }

  return {
    ...(config.dev && {
      devtool: '#cheap-module-eval-source-map'
    }),
    module: {
      noParse: /\.min\.js/,
      rules: [
        // *.md => consumed via phenomic special webpack loader
        // Allow to generate collection and rss feed.
        {
          // Phenomic requirement
          loader: phenomicLoader,
          query: {
            context: path.join(__dirname, config.source)
            // Plugins: [
            //   ...require("phenomic/lib/loader-preset-markdown").default
            // ]
            // See https://phenomic.io/docs/usage/plugins/
          },
          test: /\.(md|markdown)$/
        },

        // *.js => babel + eslint
        {
          include: [
            path.resolve(__dirname, 'scripts'),
            path.resolve(__dirname, 'src')
          ],
          loaders: [
            'babel-loader?cacheDirectory',
            `eslint-loader${config.dev ? '?emitWarning' : ''}`
          ],
          test: /\.js$/
        },

        // ! \\
        // By default *.css files are considered as CSS Modules
        // And *.global.css are considered as global (normal) CSS

        // *.css => CSS Modules
        {
          exclude: /\.global\.css$/,

          include: path.resolve(__dirname, 'src'),
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                query: {
                  localIdentName: config.production
                    ? '[hash:base64:5]'
                    : '[path][name]--[local]--[hash:base64:5]',
                  modules: true
                }
              },
              {
                loader: 'postcss-loader'
                // Query for postcss can't be used right now
                // https://github.com/postcss/postcss-loader/issues/99
                // Meanwhile, see webpack.LoaderOptionsPlugin in plugins list
                // Query: { plugins: postcssPlugins },
              }
            ]
          }),
          test: /\.css$/
        },
        // *.global.css => global (normal) css
        {
          include: path.resolve(__dirname, 'src'),
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader'
                // Query for postcss can't be used right now
                // https://github.com/postcss/postcss-loader/issues/99
                // Meanwhile, see webpack.LoaderOptionsPlugin in plugins list
                // Query: { plugins: postcssPlugins },
              }
            ]
          }),
          test: /\.global\.css$/
        },
        // ! \\
        // If you want global CSS only, just remove the 2 sections above
        // And use the following one
        // ! \\ If you want global CSS for node_modules only, just uncomment
        // This section and the `include` part
        /*
        {
          test: /\.css$/,
          // depending on your need, you might need to scope node_modules
          // for global CSS if you want to keep CSS Modules by default
          // for your own CSS. If so, uncomment the line below
          // include: path.resolve(__dirname, "node_modules"),
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              "css-loader",
              {
                loader: "postcss-loader",
                query: { "plugins": postcssPlugins },
              },
            ]
          }),
        },
        */
        // ! \\ if you want to use Sass or LESS, you can add sass-loader or
        // Less-loader after postcss-loader (or replacing it).
        // ! \\ You will also need to adjust the file extension
        // And to run the following command
        //
        // Sass: `npm install --save-dev node-sass sass-loader`
        // https://github.com/jtangelder/sass-loader
        //
        // LESS: npm install --save-dev less less-loader
        // https://github.com/webpack/less-loader

        // Copy assets and return generated path in js
        {
          loader: 'file-loader',
          query: {
            context: path.join(__dirname, config.source),
            name: '[path][name].[hash].[ext]'
          },
          test: /\.(html|ico|jpe?g|png|gif|eot|otf|webp|ttf|woff|woff2)$/
        },

        // Svg as raw string to be inlined
        {
          loader: 'raw-loader',
          test: /\.svg$/
        }
      ]
    },
    output: {
      filename: '[name].[hash].js',
      path: path.join(__dirname, config.destination),
      publicPath: config.baseUrl.pathname
    },
    plugins: [
      // You should be able to remove the block below when the following
      // Issue has been correctly handled (and postcss-loader supports
      // "plugins" option directly in query, see postcss-loader usage above)
      // https://github.com/postcss/postcss-loader/issues/99
      new webpack.LoaderOptionsPlugin({
        options: {
          // Required to avoid issue css-loader?modules
          // This is normally the default value, but when we use
          // LoaderOptionsPlugin, we must specify it again, otherwise,
          // Context is missing (and css modules names can be broken)!
          context: __dirname,
          postcss: postcssPlugins
        },
        test: /\.css$/
      }),

      new PhenomicLoaderFeedWebpackPlugin({
        feeds: {
          // Here we define one feed, but you can generate multiple, based
          // On different filters
          'feed.xml': {
            collectionOptions: {
              filter: { layout: 'Post' },
              limit: 20,
              reverse: true,
              sort: 'date'
            }
          }
        },
        // Here you define generic metadata for your feed
        feedsOptions: {
          site_url: pkg.homepage,
          title: pkg.name
        }
      }),

      new PhenomicLoaderSitemapWebpackPlugin({
        site_url: pkg.homepage
      }),

      new ExtractTextPlugin({
        disable: config.dev,
        filename: '[name].[hash].css'
      }),

      ...(config.production && [
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
      ])
    ],

    resolve: { extensions: ['.js', '.json'] }
  }
}
