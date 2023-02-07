<template>
  <div class="xxx-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XxxRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    // xxx-radio-group接收到了 value值
    // 将来还需要触发 当前组件的input事件
    // provide 与  inject  provider/consumer
    value: null
  }
}
</script>

<style>

</style>
