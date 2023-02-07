<template>
  <div>
    <h3>基本用法</h3>
    <xxx-card>
      <xxx-radio v-model="radio1" label="1">选项1</xxx-radio>
      <xxx-radio v-model="radio1" label="2">选项2</xxx-radio>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </xxx-card>
    <h3>禁用状态</h3>
    <xxx-card>
      <xxx-radio disabled v-model="radio2" label="1">选项1</xxx-radio>
      <xxx-radio disabled v-model="radio2" label="2">选项2</xxx-radio>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
      </template>
    </xxx-card>
    <h3>单选组</h3>
    <xxx-card>
      <xxx-radio-group v-model="radio3">
        <xxx-radio  label="1">选项1</xxx-radio>
        <xxx-radio  label="2">选项2</xxx-radio>
      </xxx-radio-group>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
      </template>
    </xxx-card>
    <h3>边框</h3>
    <xxx-card>
      <xxx-radio-group v-model="radio4">
        <xxx-radio border label="1">选项1</xxx-radio>
        <xxx-radio border label="2">选项2</xxx-radio>
      </xxx-radio-group>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code4}}</code></pre>
      </template>
    </xxx-card>
    <h3>不同大小</h3>
    <xxx-card>
      <xxx-radio-group v-model="radio5">
        <xxx-radio size="medium" border label="1">选项1</xxx-radio>
        <xxx-radio size="medium" border label="2">选项2</xxx-radio>
      </xxx-radio-group>
      <xxx-radio-group style="margin-top: 20px" v-model="radio6">
        <xxx-radio size="small" border label="1">选项1</xxx-radio>
        <xxx-radio size="small" border label="2">选项2</xxx-radio>
      </xxx-radio-group>
      <xxx-radio-group style="margin-top: 20px" v-model="radio7">
        <xxx-radio size="mini" border label="1">选项1</xxx-radio>
        <xxx-radio size="mini" border label="2">选项2</xxx-radio>
      </xxx-radio-group>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code5}}</code></pre>
      </template>
    </xxx-card>
  </div>
</template>

<script>
import radio from "../../../packages/radio/radio.vue";
import radioGroup from "../../../packages/radio-group/radio-group.vue";
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
  data() {
    return {
      radio1: "1",
      radio2: "1",
      radio3: "1",
      radio4: "1",
      radio5: "1",
      radio6: "1",
      radio7: "1",
      code1: `
<xxx-radio v-model="radio1" label="1">选项1</xxx-radio>
<xxx-radio v-model="radio1" label="2">选项2</xxx-radio>
data () {
    return {
    radio1: '1'
    };
}
                `.trim(),
      code2: `
<xxx-radio disabled v-model="radio2" label="1">选项1</xxx-radio>
<xxx-radio disabled v-model="radio2" label="2">选项2</xxx-radio>
data () {
    return {
    radio2: '1'
    };
}
                `.trim(),
      code3: `
<xxx-radio-group v-model="radio2">
    <xxx-radio  label="1">选项1</xxx-radio>
    <xxx-radio  label="2">选项2</xxx-radio>
</xxx-radio-group>
data () {
    return {
    radio3: '1'
    };
}
                `.trim(),
        code4: `
<xxx-radio-group v-model="radio4">
    <xxx-radio border label="1">选项1</xxx-radio>
    <xxx-radio border label="2">选项2</xxx-radio>
</xxx-radio-group>
data () {
    return {
    radio4: '1'
    };
}
                `.trim(),
        code5: `
<xxx-radio-group v-model="radio5">
    <xxx-radio size="medium" border label="1">选项1</xxx-radio>
    <xxx-radio size="medium" border label="2">选项2</xxx-radio>
</xxx-radio-group>
<xxx-radio-group style="margin-top: 20px" v-model="radio6">
    <xxx-radio size="small" border label="1">选项1</xxx-radio>
    <xxx-radio size="small" border label="2">选项2</xxx-radio>
</xxx-radio-group>
<xxx-radio-group style="margin-top: 20px" v-model="radio7">
    <xxx-radio size="mini" border label="1">选项1</xxx-radio>
    <xxx-radio size="mini" border label="2">选项2</xxx-radio>
</xxx-radio-group>
data () {
    return {
    radio5: '1'
    radio6: '1'
    radio7: '1'
    };
}
                `.trim(),
    };
  },
  components: {
    "xxx-radio": radio,
    "xxx-radio-group": radioGroup,
  },
};
</script>
<style lang="scss">
@import url('../public/fonts/iconfont.css');
</style>


