const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {
    "test-all": "./test-all.js",
    "test-single-import": "./test-single-import.js",
    "bundled-all": "./bundled-all.js",
    "bundled-single-import": "./bundled-single-import.js",
    "preserve-modules-all": "./preserve-modules-all.js",
    "preserve-modules-single-import": "./preserve-modules-single-import.js",
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
