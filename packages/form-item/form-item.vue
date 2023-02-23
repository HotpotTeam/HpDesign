<template>
  <div class="xxx-form-item">
    <label class="xxx-form-item__label" :style="{ width: this.Form.labelWidth }"
      ><slot name="label">{{ label }}</slot></label
    >
    <div class="xxx-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "XxxFormItem",
  props: {
    label: String
  },
  inject: ["Form"]
};
</script>
<style lang="scss">
.xxx-form-item {
  display: flex;
  margin-bottom: 20px;
}
.xxx-form-item__label {
  margin: auto 20px;
  text-align: left;
}
</style>
