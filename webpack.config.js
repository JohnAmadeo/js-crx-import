const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

// Webpack Docs (which are really good): https://webpack.js.org/concepts/
// Webpack configuration for React from scratch: https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658
module.exports = {
    // Specific entry point Webpack should use
    entry: './src/index.js',
    mode: 'production',
    // By default Webpack works on JS & JSON files only, loaders
    // specify how to handle other file types.
    module: {
        rules: [
            // Babel loader for transpiling JS/JSX files
            // Note .babelrc specifies the babel plugins used
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] }
            },
            // CSS loader for transpiling CSS files 
            // Enables `import "./App.css";` syntax
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    plugins: [
        // Copies files from `public/` to `dist/`, useful for manifest.json file
        // required by Chrome for extensions.
        new CopyPlugin({
            patterns: [
                { from: "crx/" },
            ],
        }),
        // Auto-creates an HTML file (`index.html` by default) which attaches 
        // the generated JS bundles with <script> tags.
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
};
