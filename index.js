'use strict'

function CompilerPlugin (methodName, callback) {
  this.methodName = methodName
  this.callback = callback
}
CompilerPlugin.prototype.apply = function (compiler) {
  compiler.plugin(this.methodName, this.callback)
}

module.exports = CompilerPlugin
