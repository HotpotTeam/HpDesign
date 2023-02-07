<template>
  <div class="xxx-steps" :class="`steps-direction-${direction}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'xxx-steps',
  props: {
    active: {
      type: Number,
      default: 0
    },
    space: {
      type: [Number, String]
    },
    stepFinishColor: {
      type: String
    },
    direction: {
      type: String,
      validator (val) {
        return ['vertical', 'horizontal'].includes(val)
      },
      default: 'horizontal'
    }
  },
  mounted () {
    this.boardcast()
    this.setStepStyle()
  },
  methods: {
    setStepStyle () {
      this.$children.forEach(vm => {
        if (this.space) { vm.lineSpan = this.space }
        if (this.stepFinishColor) { vm.stepFinishColor = this.stepFinishColor }
        if (this.direction) { vm.direction = this.direction }
      })
    },
    boardcast () {
      this.$children.forEach(vm => {
        vm.active = this.active
      })
    }
  },
  updated () {
    this.boardcast()
  }
}
</script>
<style lang="scss" scoped>
.xxx-steps{
  display: flex;
  padding:.5em;
  &.steps-direction-horizontal{
    flex-direction: row;
  }
  &.steps-direction-vertical{
    flex-direction: column;
  }
}

</style>
<style  lang="scss">
.xxx-steps .xxx-step:not(:last-child){
  flex-grow:1
}
.xxx-steps .xxx-step:last-child{
  .line{
    display:none
  }
}
</style>
