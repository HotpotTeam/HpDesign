<template>
  <div class="card">

     <div class="card-content">
       <slot></slot>
       <div>
        <div v-if="codeVisible"><slot name="code"></slot></div>
      </div>
    </div>
    <div class="card-operation" @click="toggle">

      <div class="card-msg">{{msg}}</div> 
      <div @click.stop="">
       <xxx-icon 
        class="card-copy-button"
        type="button"
        v-clipboard:copy="cpyMsg"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
       name='fuzhi' color="gray" size="30"> </xxx-icon>
       </div>

    </div>
 </div>
</template>
<script>

import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import Icon from "../../../packages/icon/icon.vue";
import Toast from "../../../packages/toast/index"
Vue.use(VueClipboard)
Vue.prototype.$toast = Toast;
export default {

  props:['cpyMsg'],


  data(){
    return{
      codeVisible: false,
      msg:'展开代码'
    }
  },
  methods:{
    toggle(){
      this.codeVisible = !this.codeVisible
      this.msg = this.codeVisible?'收起代码':'展开代码'
    },

    //复制成功的回调
    onCopy() {
        // alert('成功复制!')
       this.$toast({
          toast: '复制成功！',
          type: 'success'
      });


    },
    //复制失败的回调
    onError: e => {
         this.$toast({
          toast: '复制失败~',
          type: 'error'
      });
    }

  },

  components: {
    "xxx-icon": Icon
  },




}
</script>



<style lang="scss" scoped>
@import url('../public/newfonts/iconfont.css');


  .card{
    border:1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 3px 0 #ccc;
    .card-content{
      padding:14px;
      border-bottom:1px solid #ccc;
    }

    .card-operation{
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    // 采用flew与负外边距的方式设置居中+靠右的两栏布局
    .card-msg {
      flex: 1;
      display: flex;
      align-items: center; 
      justify-content: center; 
      margin-right: -40px;
      
    }

    .card-copy-button{
      width: 40px;
    }
  }


</style>