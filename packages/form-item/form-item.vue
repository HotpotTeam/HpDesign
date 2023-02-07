<template>
  <div class="xxx-form-item">
    <label class="xxx-form-item__label" :style="{width: this.Form.labelWidth}">{{label}}</label>
    <div class="xxx-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XxxFormItem',
  props: {
    label: String
  },
  inject: ['Form']
}
</script>
