<template>
  <div>
    <h3>Toast</h3>
    <xxx-card>
      <xxx-button @click="open1">提示</xxx-button>
      <xxx-button @click="open2">成功</xxx-button>
      <xxx-button @click="open3">警告</xxx-button>
      <xxx-button @click="open4">错误</xxx-button>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </xxx-card>
  </div>
</template>

<script>
import Button from "../../../packages/button/button.vue";
import Toast from "../../../packages/toast/index"
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
Vue.prototype.$toast = Toast;
export default {
  data() {
    return {
      code1: `
<xxx-button @click="open1">提示</xxx-button>
<xxx-button @click="open2">成功</xxx-button>
<xxx-button @click="open3">警告</xxx-button>
<xxx-button @click="open4">错误</xxx-button>
import Button from "../../../packages/button/button.vue";
import Toast from "../../../packages/toast/index"

Vue.prototype.$toast = Toast;

methods:{
    open1(){
        this.$toast({
          toast: '这是一条消息',
          type: 'info'
      });
    },
    open2(){
        this.$toast({
          toast: '这是一条成功消息',
          type: 'success'
      });
    },
    open3(){
        this.$toast({
          toast: '这是一条警告消息',
          type: 'warning'
      });
    },
    open4(){
        this.$toast({
          toast: '这是一条错误消息',
          type: 'error'
      });
    },
}
                `.trim(),
    };
  },
  components: {
    "xxx-button": Button,
  },
  methods:{
      open1(){
          this.$toast({
            toast: '这是一条消息',
            type: 'info'
        });
      },
      open2(){
          this.$toast({
            toast: '这是一条成功消息',
            type: 'success'
        });
      },
      open3(){
          this.$toast({
            toast: '这是一条警告消息',
            type: 'warning'
        });
      },
      open4(){
          this.$toast({
            toast: '这是一条错误消息',
            type: 'error'
        });
      },
  }
};
</script>
<style lang="scss">
@import url('../public/fonts/iconfont.css');
</style>


