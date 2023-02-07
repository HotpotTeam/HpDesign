<template>
  <div class="xxx-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XxxCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
