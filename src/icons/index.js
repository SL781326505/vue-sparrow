import Vue from 'vue'
import IconSvg from '@/components/IconSvg'

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)

Vue.component('icon-svg', IconSvg)

/**
 * 1、安装svg-sprite-loader
 * 2、在vue.config.js中 配置 .svg 文件loader
 */
