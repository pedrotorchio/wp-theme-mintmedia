const path = require( 'path' );
const AssetsPlugin = require( 'assets-webpack-plugin' );
const PORT = require('./build/options.json').port;
const THEME_ROOT = path.resolve("/wp-content/themes/", path.basename(__dirname));

const output = (ext = 'js') => ({
  filename: `[name].[hash].${ext}`,
  chunkFilename: `[name].[hash].${ext}`
});

var config = {
  pages: {
    'app': 'src/main.js'
  }
};

if (process.env.NODE_ENV === 'production') {
  
  config.chainWebpack = config => {
    if(config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin && extractCSSPlugin.tap(() => [{...output('css')}])
    }
  }
  config.publicPath = path.resolve(THEME_ROOT, "dist");
  config.configureWebpack = {
    output: {...output()},
    plugins: [
      new AssetsPlugin({
        filename: 'assets.json',
        path: path.resolve( __dirname, './build' ),
        fullPath: false
      })
    ]
  }

} else {
  config.publicPath = "http://localhost:" + PORT + "/";
  config.configureWebpack = {
    devServer: {
      disableHostCheck: true
    }
  }
}


module.exports = config