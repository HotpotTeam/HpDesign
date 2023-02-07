<template>
  <div>
    <h3>基本用法</h3>
    <xxx-card>
      <xxx-checkbox v-model="checked1">选项1</xxx-checkbox>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </xxx-card>
    <h3>禁用状态</h3>
    <xxx-card>
      <xxx-checkbox v-model="checked1" disabled>备选项1</xxx-checkbox>
      <xxx-checkbox v-model="checked2" disabled>备选项</xxx-checkbox>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
      </template>
    </xxx-card>
    <h3>多选组</h3>
    <xxx-card>
        <xxx-checkbox-group v-model="checkList1">
            <xxx-checkbox label="选项1">选项1</xxx-checkbox>
            <xxx-checkbox label="选项2">选项2</xxx-checkbox>
            <xxx-checkbox label="选项3" disabled>选项3</xxx-checkbox>
            <xxx-checkbox label="选项4" disabled>选项4</xxx-checkbox>
        </xxx-checkbox-group>  
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
      </template>
    </xxx-card>
    <h3>带边框</h3>
    <xxx-card>
        <xxx-checkbox-group v-model="checkList2">
            <xxx-checkbox label="选项1" border>选项1</xxx-checkbox>
            <xxx-checkbox label="选项2" border>选项2</xxx-checkbox>
        </xxx-checkbox-group>  
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code4}}</code></pre>
      </template>
    </xxx-card>
    <h3>不同大小</h3>
    <xxx-card>
        <xxx-checkbox-group v-model="checkList3">
            <xxx-checkbox label="选项1" border size="medium">选项1</xxx-checkbox>
            <xxx-checkbox label="选项2" border size="small">选项2</xxx-checkbox>
            <xxx-checkbox label="选项3" border size="mini">选项3</xxx-checkbox>
        </xxx-checkbox-group>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code5}}</code></pre>
      </template>
    </xxx-card>
  </div>
</template>

<script>
import checkbox from "../../../packages/checkbox/checkbox.vue";
import checkboxGroup from "../../../packages/checkbox-group/checkbox-group.vue";
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
  data() {
    return {
      checked1: true,
      checked2: false,
      checkList1: ['选项1','选项3'],
      checkList2: ['选项1'],
      checkList3: ['选项1'],
      code1: `
<xxx-checkbox v-model="checked1">选项1</xxx-checkbox>
data () {
    return {
    checked1: true
    };
}
                `.trim(),
      code2: `
<xxx-checkbox v-model="checked1" disabled>备选项1</xxx-checkbox>
<xxx-checkbox v-model="checked2" disabled>备选项</xxx-checkbox>
data () {
    return {
    checked1: true,
    checked2: false
    };
}
                `.trim(),
      code3: `
<xxx-checkbox-group v-model="checkList">
    <xxx-checkbox label="选项1">选项1</xxx-checkbox>
    <xxx-checkbox label="选项2">选项2</xxx-checkbox>
    <xxx-checkbox label="选项3" disabled>选项3</xxx-checkbox>
    <xxx-checkbox label="选项4" disabled>选项4</xxx-checkbox>
</xxx-checkbox-group>  
data () {
    return {
        checkList: ['选项1','选项3'],
    };
}
                `.trim(),
      code4: `
<xxx-checkbox-group v-model="checkList">
    <xxx-checkbox label="选项1" border>选项1</xxx-checkbox>
    <xxx-checkbox label="选项2" border>选项2</xxx-checkbox>
</xxx-checkbox-group>   
data () {
    return {
        checkList: ['选项1'],
    };
}
                `.trim(),
      code5: `
<xxx-checkbox-group v-model="checkList">
    <xxx-checkbox label="选项1" border size="medium">选项1</xxx-checkbox>
    <xxx-checkbox label="选项2" border size="small">选项2</xxx-checkbox>
    <xxx-checkbox label="选项3" border size="mini">选项3</xxx-checkbox>
</xxx-checkbox-group>  
data () {
    return {
        checkList: ['选项1'],
    };
}
                `.trim(),
    };
  },
  components: {
    "xxx-checkbox": checkbox,
    "xxx-checkbox-group": checkboxGroup,
  },
};
</script>
<style lang="scss">
@import url('../public/fonts/iconfont.css');
</style>


