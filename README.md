# compiler-webpack-plugin

[![devDependency Status][david-dev-badge]][david-dev]

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

A webpack plugin which allows the configuration to define its own compiler callbacks.

### Install

```shell
npm install compiler-webpack-plugin
```

### Usage

```shell
// webpack.config.js
var CompilerPlugin = require('compiler-webpack-plugin')

module.exports = {
  ...
  plugins: [
    ...
    new CompilerPlugin('done', function (stats) {
      ...
    })
  ]
  ...
}
```

[david-dev]: https://david-dm.org/elliottsj/compiler-webpack-plugin#info=devDependencies
[david-dev-badge]: https://david-dm.org/elliottsj/compiler-webpack-plugin/dev-status.svg
