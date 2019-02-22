import Vue from 'vue'
// import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
// import json from 'highlight.js/lib/languages/json'
hljs.registerLanguage('javascript', javascript)

let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', {
    inserted: function (el) {
      let block = el.querySelectorAll('pre code')
      for (let i = 0; i < block.length; i++) {
        const item = block[i]
        hljs.highlightBlock(item)
      }
    }
  })
}

Vue.use(Highlight)
