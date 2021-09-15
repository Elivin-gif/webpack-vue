const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const variable = require("./webpackUtile/variable");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { SRC_PATH, PUBLIC_PATH, DIST_PATH } = variable;
module.exports = {
  entry: path.join(SRC_PATH, "main.ts"),
  mode: "development",
  stats: "errors-only",
  output: {
    path: DIST_PATH,
    filename: "assets/js/chunk.[chunkhash].js",
    publicPath: "./",
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: "all", // 匹配的块的类型：initial（初始块），async（按需加载的异步块），all（所有块）
      automaticNameDelimiter: "-",
      cacheGroups: {
        // 项目第三方组件
        vendor: {
          name: "vendors",
          enforce: true, // ignore splitChunks.minSize, splitChunks.minChunks, splitChunks.maxAsyncRequests and splitChunks.maxInitialRequests
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        },
        // 项目公共组件
        default: {
          minSize: 0, // 分离后的最小块文件大小默认3000
          name: "common", // 用以控制分离后代码块的命名
          minChunks: 3, // 最小共用次数
          priority: 10, // 优先级，多个分组冲突时决定把代码放在哪块
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.ts|js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css|sass|scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        // webpack5 内置了 asset 模块, 用来代替 file-loader & url-loader & raw-loader 处理静态资源
        test: /\.png|jpg|gif|jpeg|svg/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "assets/images/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[contenthash:8].css",
    }),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: path.join(PUBLIC_PATH, "index.html"),
      favicon: path.resolve(__dirname, "../public/logo.svg"),
    }),
  ],
};
