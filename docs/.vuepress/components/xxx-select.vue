<template>
  <div>
    <h3>基本用法</h3>
    <xxx-card>
      <xxx-select v-model="value1" placeholder="请选择" :width="240" :height="40">
        <template v-slot:xxx_option>
            <xxx-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </xxx-option>
        </template>
      </xxx-select>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </xxx-card>
  </div>
</template>

<script>
import Select from "../../../packages/select/select.vue";
import Option from "../../../packages/select/option.vue";
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
  data() {
    return {
      value1: "",
      options: [
        {
          value: "选项1",
          label: "苹果",
        },
        {
          value: "选项2",
          label: "橘子",
        },
        {
          value: "选项3",
          label: "香蕉",
        },
      ],
      code1: `
<xxx-select v-model="value1" placeholder="请选择" :width="240" :height="40">
  <template v-slot:xxx_option>
      <xxx-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </xxx-option>
  </template>
</xxx-select>
data () {
    return {
      value1: "",
      options: [
        {
          value: "选项1",
          label: "苹果",
        },
        {
          value: "选项2",
          label: "橘子",
        },
        {
          value: "选项3",
          label: "香蕉",
        },
      ],
    };
}
                `.trim(),
    };
  },
  components: {
    "xxx-select": Select,
    "xxx-option": Option,
  },
};
</script>
<style lang="scss">
@import url('../public/fonts/iconfont.css');
</style>


