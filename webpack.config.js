const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    // Specific entry point Webpack should use
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // Auto-creates an HTML file (`index.html` by default) which attaches 
        // the generated JS bundles with <script> tags.
        new HtmlWebpackPlugin({}),
        // Copies files from `public/` to `dist/`, useful for manifest.json file
        // required by Chrome for extensions.
        new CopyPlugin({
            patterns: [
                { from: "public/" },
            ],
        }),
    ],
    mode: 'production',
};
