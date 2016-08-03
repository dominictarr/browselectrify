# browselectrify

make a browserify bundle that also works in electron.

basically, this makes a browserify bundle that doesn't have
any node globals set (process, Buffer, etc) or core modules,
and then it concatenates that to a bundle that provides those,
but turns off in electron.

This makes the electron bundle 106k longer, but it will work
in the browser.

```
npm install browselectrify electro electron-prebuilt -g
browselectrify index.js > bundle.js
electro index.js # run electron directly, loading with sync require's
electro bundle.js # run electron on bundle, this will load faster!
```

[electro](https://github.com/dominictarr/electro) is a boilerplate
killing wrapper around electron. if you just want to run a js file
inside an electron instance, electro does that.

## License

MIT

