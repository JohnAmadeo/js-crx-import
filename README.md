The most basic repo for a Chrome extension. Pedagogically built to learn Webpack.

- Webpack configuration transpiles src/index.js (which handles import statements) to dist/main.js
- Note other requirements for a Chrome extension, namely manifest.json, index.html, and logo.png are all manually inserted into dist/ which is an anti-pattern (everything in dist/ should be codegen-ed by Webpack)
