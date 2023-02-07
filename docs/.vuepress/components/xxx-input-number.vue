<template>
  <div>
    <h3>基本用法</h3>
    <xxx-card>
        <xxx-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></xxx-input-number>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </xxx-card>
    <h3>禁用状态</h3>
    <xxx-card>
        <xxx-input-number v-model="num2" disabled></xxx-input-number>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
      </template>
    </xxx-card>
    <h3>步数</h3>
    <xxx-card>
        <xxx-input-number v-model="num3" :step="2"></xxx-input-number>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
      </template>
    </xxx-card>
    <h3>精度</h3>
    <xxx-card>
        <xxx-input-number v-model="num4" :precision="2" :step="0.1"></xxx-input-number>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code4}}</code></pre>
      </template>
    </xxx-card>
  </div>
</template>

<script>
import InputNumber from "../../../packages/input-number/input-number.vue";
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
  data() {
    return {
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
      code1: `
<xxx-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></xxx-input-number>
data() {
  return {
    num1: 1,
  }
},
methods: {
  handleChange(value) {
    console.log(value);
  }
},
                `.trim(),
      code2: `
<xxx-input-number v-model="num2" disabled></xxx-input-number>
data() {
  return {
    num2: 1,
  }
}
                `.trim(),
      code3: `
<xxx-input-number v-model="num3" :step="2"></xxx-input-number>
data() {
  return {
    num3: 1,
  }
}
                `.trim(),
      code4: `
<xxx-input-number v-model="num4" :precision="2" :step="0.1"></xxx-input-number>
data() {
  return {
    num4: 1,
  }
}
                `.trim(),
    };
  },
  components: {
    "xxx-input-number": InputNumber,
  },
  methods: {
        handleChange(value) {
          console.log(value);
        }
    },
};
</script>
<style lang="scss">
@import url('../public/fonts/iconfont.css');
</style>


