# Webpack

## What is Webpack

At its core, webpack is a static module bundler for modern JavaScript
applications. When webpack processes your application, it internally builds a
dependency graph from one or more entry points and then combines every module
your project needs into one or more bundles, which are static assets to serve
your content from.

## Installation

`npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader`

## Setup

In `tsconfig.json`,

Set `target` as `es6`. \
Set `module` as `es2015`. \
Comment `rootDir` - This is not needed with `webpack`. \
Set `sourceMap` to `true`

Add a file called `webpack.config.js` and modify it as,

```javascript
const path = require('path')

module.exports = {
  mode: 'development'
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
```

Now, in `package.json` add following scripts `"build": "webpack"`, `"start": "webpack-dev-server"`

Finally, run `npm run build` or `npm start`

Then you need to get your enter `<script type="module" src="dist/bundle.js"></script>` in `index.html`

For production, you can create following `webpack.config.prod.js`,

Just install `npm install --save-dev clean-webpack-plugin` first

```javascript
const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production'
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
}
```

then adjust `package.json` `scripts` with `"build": "webpack --config webpack.config.prod.js`

then run `npm run build`.
