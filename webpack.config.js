const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {
    "simple-demo-all": "./src/simple-demo-all.js",
    "simple-demo-single-import": "./src/simple-demo-single-import.js",
    "bundled-all": "./src/bundled-all.js",
    "bundled-single-import": "./src/bundled-single-import.js",
    "preserve-modules-all": "./src/preserve-modules-all.js",
    "preserve-modules-single-import": "./src/preserve-modules-single-import.js",
  },
  mode: "production",
  optimization: {
    usedExports: true,
    innerGraph: true,
    sideEffects: true,
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: false }),
  ],
};
