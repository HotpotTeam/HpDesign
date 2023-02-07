<template>
  <div>
    <h3>基本用法</h3>
    <xxx-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="40%"
      top="12vh">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <xxx-button @click="dialogVisible = false">取 消</xxx-button>
        <xxx-button type="primary" @click="dialogVisible = false">确 定</xxx-button>
      </span>
    </xxx-dialog>
    <xxx-card>
    <xxx-button type="primary" @click="dialogVisible = true">打开dialog</xxx-button>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </xxx-card>
    <h3>居中布局</h3>
    <xxx-dialog
      title="提示"
      :visible.sync="dialogVisible1"
      width="40%"
      top="12vh"
      center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <xxx-button @click="dialogVisible1 = false">取 消</xxx-button>
        <xxx-button type="primary" @click="dialogVisible1 = false">确 定</xxx-button>
      </span>
    </xxx-dialog>
    <xxx-card>
    <xxx-button type="primary" @click="dialogVisible1 = true">打开dialog</xxx-button>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </xxx-card>
  </div>
</template>

<script>
import Button from "../../../packages/button/button.vue";
import Dialog from "../../../packages/dialog/dialog.vue";
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
  data() {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      code1: `
<xxx-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  top="12vh">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <xxx-button @click="dialogVisible = false">取 消</xxx-button>
    <xxx-button type="primary" @click="dialogVisible = false">确 定</xxx-button>
  </span>
</xxx-dialog>

data() {
  return {
    dialogVisible: false
  };
},
                `.trim(),
      code2: `
<xxx-dialog
  title="提示"
  :visible.sync="dialogVisible1"
  width="30%"
  top="12vh"
  center>
  <span>需要注意的是内容是默认不居中的</span>
  <span slot="footer" class="dialog-footer">
    <xxx-button @click="dialogVisible1 = false">取 消</xxx-button>
    <xxx-button type="primary" @click="dialogVisible1 = false">确 定</xxx-button>
  </span>
</xxx-dialog>

data() {
  return {
    dialogVisible1: false
  };
},
                `.trim(),
    };
  },
  components: {
    "xxx-dialog": Dialog,
    "xxx-button": Button,
  },
  methods:{
  }
};
</script>
<style lang="scss">
@import url('../public/fonts/iconfont.css');
</style>


