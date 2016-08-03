node_modules = {}

if(!(function () { try { return !!require('electron') } catch(_) {}})())  {
  //we must be in the browser...
  node_modules.url = require('url')
  node_modules.buffer = require('buffer')
  node_modules.path = require('path')
  node_modules.querystring = require('querystring')
  node_modules.punycode = require('punycode')
}

if(typeof window !== 'undefined') {
  if(typeof window.Buffer === 'undefined')
    window.Buffer = require('buffer').Buffer
  if(typeof global === 'undefined')
    window.global = window
  if(typeof window.process === 'undefined')
    window.process = process
  window.global = window
}


