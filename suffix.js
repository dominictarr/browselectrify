;(function () {
  var _require = 'function' === typeof require && require

  require = function (m) {
    console.log("LOAD", m, node_modules)
    if(node_modules[m]) return node_modules[m]
    else if(_require) return _require(m)
    else if(m == 'fs') return //browserify style... );
    else throw new Error('module not found:'+m)
  }

})();


