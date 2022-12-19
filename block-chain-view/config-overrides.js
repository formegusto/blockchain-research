const {
  addWebpackResolve,
  override,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackResolve({
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
  })
);
