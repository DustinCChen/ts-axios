const fs = require('fs')
const path = require('path')
const { webpack } = require('webpack')
module.exports = {
  mode: 'development',
  /*
   * 我们会在example目录下创建多个子目录
   * 不同章节的demo放到不同的子目录下
   * 每个子目录都会有一个app.ts文件，作为webpack入口文件
   * entries收集了所有的入口文件，并且每个入口文件还引入一个用于热更新的文件
   * entries是一个对象，key是目录名，value是入口文件的绝对路径
   */
  entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
    const fullDir = path.join(__dirname, dir)
    const entry = path.join(fullDir, 'app.ts')
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      entries[dir] = ['webpack-hot-middleware/client', entry]
    }
    return entries
  }, {}),
  /**
   * 根据不同的目录名称，打包生成目标js文件
   */
  output: {
    path: path.join(__dirname, '__build__'),
    filename: '[name].js',
    publicPath: '/__build__/'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
