<template>
<div>
  <i :class="['icon', 'xxx-icon-' + name]" :style="{color, 'font-size': size+'px'}"></i>
  <span v-if="showText">{{name}}</span>
</div>
</template>

<script>
import '../../src/assets/fonts/iconfont.css'
  export default {
    name: 'XxxIcon',

    props: {
      name: String,
      color: String,
      size: [Number,String],
      showText:{
          type: Boolean,
          default: false
      },
    },
  };
</script>
<style lang="scss">
@import url('../../src/assets/fonts/iconfont.css');
</style>