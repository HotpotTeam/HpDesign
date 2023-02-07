<template>
  <div>
    <h3>基本用法</h3>
    <xxx-card>
      <xxx-input
        v-model="value1" placeholder="请输入内容">
      </xxx-input>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </xxx-card>
    <h3>禁用状态</h3>
    <xxx-card>
      <xxx-input
        v-model="value2" placeholder="请输入内容" disabled>
      </xxx-input>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
      </template>
    </xxx-card>
    <h3>可清空</h3>
    <xxx-card>
      <xxx-input
        v-model="value3" placeholder="请输入内容" clearable>
      </xxx-input>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
      </template>
    </xxx-card>
    <h3>密码框</h3>
    <xxx-card>
      <xxx-input
        v-model="value4" placeholder="请输入内容" showPassword>
      </xxx-input>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code4}}</code></pre>
      </template>
    </xxx-card>
    <h3>文本域</h3>
    <xxx-card>
      <xxx-input
        v-model="value5" placeholder="请输入内容" type="textarea" >
      </xxx-input>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code5}}</code></pre>
      </template>
    </xxx-card>
    <h3>限制长度</h3>
    <xxx-card>
      <xxx-input
        v-model="value6" placeholder="请输入内容" maxlength="10" show-word-limit>
      </xxx-input>
      <xxx-input style="margin-top: 20px"
        v-model="value7" placeholder="请输入内容" type="textarea" maxlength="10" show-word-limit>
      </xxx-input>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code6}}</code></pre>
      </template>
    </xxx-card>
  </div>
</template>

<script>
import Input from "../../../packages/input/input.vue";
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      code1: `
<xxx-input
    v-model="value1" placeholder="请输入内容">
</xxx-input>
data() {
  return {
    value1: true
  }
}
                `.trim(),
      code2: `
<xxx-input
    v-model="value2" placeholder="请输入内容" disabled>
</xxx-input>
data() {
  return {
    value2: ''
  }
}
                `.trim(),
      code3: `
<xxx-input
    v-model="value3" placeholder="请输入内容" clearable>
</xxx-input>
data() {
  return {
    value3: ''
  }
}
                `.trim(),
      code4: `
<xxx-input
    v-model="value4" placeholder="请输入内容" showPassword>
</xxx-input>
data() {
  return {
    value4: ''
  }
}
                `.trim(),
      code5: `
<xxx-input
    v-model="value5" placeholder="请输入内容" type="textarea" >
</xxx-input>
data() {
  return {
    value5: ''
  }
}
                `.trim(),
      code6: `
<xxx-input
    v-model="value6" placeholder="请输入内容" maxlength="10" show-word-limit>
</xxx-input>
<xxx-input style="margin-top: 20px"
    v-model="value7" placeholder="请输入内容" type="textarea" maxlength="10" show-word-limit>
</xxx-input>
data() {
  return {
    value6: '',
    value7: '',
  }
}
                `.trim(),
    };
  },
  components: {
    "xxx-input": Input,
  },
};
</script>
<style lang="scss">
@import url('../public/fonts/iconfont.css');
</style>


