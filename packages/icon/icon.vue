<template>
<div>
  <i :class="['icon', 'xxx-icon-' + name, isRotate == true ? 'keep-rotate' : '']" :style="{color, 'font-size': size+'px', 'transform': 'rotate('+rotateAngle+'deg)'} "></i>
  <span v-if="showText">{{name}}</span>
</div>
</template>

<script>
  export default {
    name: 'xxxIcon',

    props: {
      name: String,
      color: String,
      size: [Number,String],
      rotateAngle: {
        type: [Number,String],
        default: 0
      },
      isRotate: {
          type: Boolean,
          default: false
      },
      showText:{
          type: Boolean,
          default: false
      },
    },
  };
</script>
<style lang="scss">
@import url('../../src/assets/newfonts/iconfont.css');


.keep-rotate:before {
  display:inline-block;
  animation: rotate 0.5s infinite;
  @keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
  }
}

</style>