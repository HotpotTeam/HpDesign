<template>
  <div>
    <h3>icon</h3>
    <xxx-card>
      <div class="icon-list">
        <span v-for="(item, index) in iconList" :key="index">
          <xxx-icon :name="item" class="icon-box" color="red" size="20" showText />
        </span>
      </div>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </xxx-card>
  </div>
</template>

<script>
import icon from "../../../packages/icon/icon.vue";
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
  data() {
    return {
      iconList: [
        "info",
        "custom-search",
        "share",
        "yin",
        "edit",
        "goods",
        "phone",
        "sunny",
        "user",
        "warning",
        "error_3",
        "star",
        "ArrowLeft",
        "ArrowRight",
        "circle-remove",
      ],
      code1: `
<xxx-icon name='share' color="red" size="20" />  
                `.trim(),
    };
  },
  components: {
    "xxx-icon": icon,
  },
};
</script>
<style lang="scss">
@import url('../public/fonts/iconfont.css');
.icon-list {
  display: flex;
  flex-wrap: wrap;
  .icon-box {
    width: 140px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    &:hover {
      color: #66b1ff;
      border: 1px solid #66b1ff;
      box-shadow: 0 0 3px 0 #66b1ff;
    }
  }
}
</style>


