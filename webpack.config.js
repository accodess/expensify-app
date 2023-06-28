const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourseMap: true,
                },
              },
              {
                loader: "sass-loader",
                options: {
                  sourseMap: true,
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract],
    devtool: isProduction ? "source-map" : "inline-sourse-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/",
    },
  };
};
