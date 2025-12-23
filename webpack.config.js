const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);



// Load config JSON
const fs = require('fs');
const path2 = require('path');
// const configPath = path2.resolve(__dirname, 'react_config.json');
const configPath = path2.resolve(__dirname, 'src/assets/jsons/app_config.json');
const appConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
const remoteEntryUrl = appConfig.REMOTE_ENTRY_BASE_URL || '';

// Simple cache busting - generates new timestamp on each build
// const cacheBuster = Date.now();

module.exports = {
  output: {
    uniqueName: "ceeAngular",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      remotes: {
       deal_detail: `${remoteEntryUrl}/assets/remoteEntry.js`,
        //deal_detail: 'http://localhost:5173/assets/remoteEntry.js',
      },

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "react": { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
