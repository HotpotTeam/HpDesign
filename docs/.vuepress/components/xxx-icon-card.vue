<template>
  <div>
    <xxx-card>
        <div>
          <h3 class="icon-title">{{inconTitle}}</h3>
        </div>
        <div class="icon-list">
          <span v-for="(item, index) in iconList" :key="index">
            <xxx-icon :name="item" class="icon-box" :color="color" :size="size" :isRotate="item === 'loading' || item === 'sun-fill' ? true: isRotate" showText />
          </span>
        </div>
        <template v-slot:code>
          <pre v-highlightjs><code class="vue">{{iconCode}}</code></pre>
        </template>
      </xxx-card>
    </div>
</template>

<script>
import Vue from "vue";
import icon from "../../../packages/icon/icon.vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
  props: {
    inconTitle: String,
    iconList: {
      type: Array,
      default: function() {
        return []
      }
    },
    iconCode: {
      type: String,
      default: `<xxx-icon name='share' color="red" size="20" /> `.trim()
    },

    isRotate:{
      type: Boolean,
      default: false
    },

    size:{
      type: String,
      default: "20"
    },

    color:{
      type: String,
      default: "red"
    },



    showText: {
      type: Boolean,
      default: true
    }
  },
  
  components: {
    "xxx-icon": icon,
  },
};
</script>
<style lang="scss">
@import url('../public/newfonts/iconfont.css');


.icon-title {
    color: #000000d9;
    font-weight: 500;
}

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


