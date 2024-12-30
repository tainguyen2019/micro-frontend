const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "remoteApp",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./web-component": ["./src/bootstrap.ts"],
      },

      shared: share({
        "@angular/core": {
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          strictVersion: true,
          requiredVersion: "auto",
        },

        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
