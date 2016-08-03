#! /usr/bin/env node

var fs = require('fs')
var File = require('pull-file')
var path = require('path')
var cp = require('child_process')
var pull = require('pull-stream')
var toPull = require('stream-to-pull-stream')
var Cat = require('pull-cat')

var bfy = cp.spawn(
        require.resolve('browserify/bin/cmd.js'),
        [process.argv[2], '--no-builtins', '--igv', ',']
    )

pull(
  Cat([
    File(path.join(__dirname, 'bundle.js')),
    toPull.source(bfy.stdout)
  ]),
  toPull.sink(process.stdout)
)

pull(
  toPull.source(bfy.stderr),
  toPull.sink(process.stderr)
)




