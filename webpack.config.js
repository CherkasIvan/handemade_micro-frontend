const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    output: {
        publicPath: 'http://localhost:4205/',
        uniqueName: 'jw13-craft-front-shell',
    },
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'jw13-craft-front-shell',
            library: { type: 'var', name: 'jw13-craft-front-shell' },
            filename: 'remoteEntry.js',
            exposes: {
                Header: './src/app/modules/jw13-craft-front-shell/header/header.component.ts',
                Footer: './src/app/modules/jw13-craft-front-shell/footer/footer.component.ts',
            },
            shared: {
                '@angular/core': { singleton: true, requiredVersion: 'auto' },
                '@angular/common': { singleton: true, requiredVersion: 'auto' },
                '@angular/router': { singleton: true, requiredVersion: 'auto' },
            },
        }),
    ],
};
