var path = require('path')
var utils = require('./utils')
var config = require('./config')
var vueLoaderConfig = require('./vue-loader.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var px2remConfig = require('./rem.conf')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

function exec(cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

function entries(opt) {
  var fileList = exec('cd ./vues && ls').split('\n');
  return Object.assign.apply(null, [].concat(fileList.map(function (item) {
    var obj = {};
    if (!/^_[\w-]+$/.test(item)) {
      exec(`cd ./vues/${item} && ls`).split('\n').map(function (dir) {
        obj[dir] = `./vues/${item}/` + dir + '/'
      })
    }
    return obj
  }), opt))
}

const webpackConfig = {
  entry: entries({
    // folderName: './vues/folderName'
    common: [
      './static/css/reset.scss',
    ]
  }),
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name]/build.js?[hash:7]'),
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [
      '.js', '.vue', '.json'
    ],
    modules: [
      resolve('vues'), resolve('static'), resolve('node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
      'vues': resolve('vues'),
      'static': resolve('static'),
      'image': resolve('static/image'),
      'components': resolve('vues/_components')
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader",
        options: {
          plugins: function () {
            return [
              require('autoprefixer'),
              // require('postcss-px2rem')(px2remConfig)
            ];
          }
        }
      }
    ],
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('vues'), resolve('test')
        ],
        exclude: [resolve('node_modules')]
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1024 * 8,
          name: utils.assetsPath('image/[name].[ext]?[hash:10]')
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1024 * 8,
          name: utils.assetsPath('fonts/[name].[ext]?[hash:10]')
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: {
          glob: './controller/**/*'
        },
        to: `${config.base.outputRoot}`
      }, {
        from: {
          glob: './deploy/**/*'
        },
        to: `${config.base.outputRoot}`
      }, {
        from: {
          glob: './mock/**/*'
        },
        to: `${config.base.outputRoot}`
      }, {
        from: {
          glob: './views/**/!(_*)'
        },
        to: `${config.base.outputRoot}`
      }, {
        from: {
          glob: './static/**/!(_*)'
        },
        to: `${config.base.outputRoot}`
      }
    ]),
    new ExtractTextPlugin({ filename: utils.assetsPath('css/[name]/build.css?[contenthash:10]') })
  ]
}
const vuxLoader = require('vux-loader')

module.exports = vuxLoader.merge(webpackConfig, {
  options: {},
  plugins: [
    {
      name: 'vux-ui'
    }
  ]
})
