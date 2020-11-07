module.exports = {
  plugins: {
    'posthtml-include': {
      root: __dirname + '/src/components'
    },
    'posthtml-extend': {
      root: __dirname + '/src/layouts'
    }
  }
};
