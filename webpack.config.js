const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const PrettierPlugin = require('prettier-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const autoprefixer = require("autoprefixer");
const path = require("path");

module.exports = (env, options) => {
  const appInfo = require("./app-info")(options);
  const development = appInfo.mode.development;

  return {
    entry: {
      main: "./src/main.js",
    },
    output: {
      filename: "[name].[contenthash:8].js",
      path: path.resolve(__dirname, "dist"),
      chunkFilename: "[name].[contenthash:8].js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.s?css$/,
          use: [
            "style-loader",
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sassOptions: {
                  includePaths: [
                    path.resolve(__dirname, 'node_modules/place-framework/scss/'),
                  ],
                },
              }
            },
          ],
        },
        {
          test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
          loader: "file-loader",
          options: {
            name: '[name].[ext]'
          }
        },
        {
          test: /\.(png|jpe?g|gif|webm|mp4|mov|svg)$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/dist",
            esModule: false,
          },
        },
        // {
        //   test: /\.(html)$/,
        //   use: [
        //     {
        //       loader: 'html-loader'
        //     }
        //   ]
        // }
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
      new PrettierPlugin({
        tabWidth: 2,
        useTabs: true,
        extensions: ['.scss'],
      }),
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index-template.html"),
        favicon: "./public/favicon.ico",
        alwaysWriteToDisk: true,
        meta: appInfo.metas,
        minify:{    
          removeComments: false,    
          collapseWhitespace: true    
        }
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[name].css",
      }),
      new HtmlWebpackHarddiskPlugin()
    ],
    resolve: {
      alias: {
        vue$: "vue/dist/vue.runtime.esm.js",
      },
      extensions: ["*", ".js", ".vue", ".json"],
    },
    optimization: {
      moduleIds: "hashed",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: -10,
            chunks: "all",
          },
        },
      },
    },
    devServer: {
      historyApiFallback: true
    }
  }
};
