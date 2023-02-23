<template>
  <div class="xxx-form" :class="[
  labelPosition ? 'xxx-form-item__label' + labelPosition : '',
  { 'el-form--inline': inline }]">
    <form><slot></slot></form>
  </div>
</template>

<script>
export default {
  name: "XxxForm",
  props: {
    model: {
      type: Object,
      required: true
    },
    labelPosition: {
      type: String,
   
    },
    labelWidth: {
      type: String,
      default: "80px"
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  provide() {
    return {
      Form: this
    };
  }
};
</script>

<style lang="scss">
.xxx-form-item__labelleft {
.xxx-form-item__label {
  text-align: left;
}
}
.xxx-form-item__labelright {
.xxx-form-item__label {
  text-align: right;
}
}
</style>
