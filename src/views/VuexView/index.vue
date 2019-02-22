<template>
  <div class="container">
    <pre v-highlight>
      <code>
        $("#imgtest").click(function(e){
            //获取鼠标在图片上的坐标
            alert("X："+e.offsetX+"\n Y:"+e.offsetY);
            //获取元素相对于页面的坐标
            alert("X："+$(this).offset().left+"\n Y:"+$(this).offset().top)
        });
      </code>
    </pre>
    <pre v-highlight>
      <code>
        {{sourceJson}}
      </code>
    </pre>
    <pre v-highlight>
      <code>
        {{formatJson}}
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // sourceJson: `{
      //   "name": "cli3-project",
      //   "version": "0.1.0",
      //   "private": true,
      //   "scripts": {
      //     "serve": "vue-cli-service serve",
      //     "build": "vue-cli-service build",
      //     "lint": "vue-cli-service lint"
      //   },
      //   "dependencies": {
      //     "element-ui": "^2.4.5",
      //     "highlight.js": "^9.14.2",
      //     "vue": "^2.5.22",
      //     "vue-router": "^3.0.2"
      //   }
      // }`
      sourceJson: `{"name": "cli3-project","version": "0.1.0","private": true,"scripts": {"serve": "vue-cli-service serve","build": "vue-cli-service build","lint": "vue-cli-service lint"},"dependencies": {"element-ui": "^2.4.5","highlight.js": "^9.14.2","vue": "^2.5.22","vue-router": "^3.0.2"}}`
    }
  },
  computed: {
    formatJson () {
      return JSON.parse(decodeURI(this.sourceJson))
    }
  }
}
</script>
