<template>
  <div>
    <h3>基本用法</h3>
    <xxx-card>
      <xxx-switch
        v-model="value1">
      </xxx-switch>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </xxx-card>
    <h3>文字描述</h3>
    <xxx-card>
      <xxx-switch
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="开"
        inactive-text="关">
      </xxx-switch>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
      </template>
    </xxx-card>
    <h3>禁用状态</h3>
    <xxx-card>
      <xxx-switch
        v-model="value3"
        disabled>
      </xxx-switch>
      <xxx-switch
        v-model="value4"
        disabled>
      </xxx-switch>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
      </template>
    </xxx-card>
  </div>
</template>

<script>
import Switch from "../../../packages/switch/switch.vue";
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: false,
      code1: `
<xxx-switch
  v-model="value1">
</xxx-switch> 
data() {
  return {
    value1: true
  }
}
                `.trim(),
      code2: `
<xxx-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="开"
  inactive-text="关">
</xxx-switch>
data() {
  return {
    value2: true
  }
}
                `.trim(),
      code3: `
<xxx-switch
  v-model="value3"
  disabled>
</xxx-switch>
<xxx-switch
  v-model="value4"
  disabled>
</xxx-switch>
<template v-slot:code>
data() {
  return {
    value3: true,
    value4: false,
  }
}
                `.trim(),
    };
  },
  components: {
    "xxx-switch": Switch,
  },
};
</script>
<style lang="scss">
@import url('../public/fonts/iconfont.css');
</style>


