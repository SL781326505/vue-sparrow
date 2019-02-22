const path = require('path')

module.exports = {
  chainWebpack: config => {
    // svg-config
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.exclude.add(/node_modules/)
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(path.resolve('src/icons')) // 必须
    imagesRule
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  }
}
