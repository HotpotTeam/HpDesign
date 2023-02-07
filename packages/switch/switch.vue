<template>
  <div class="xxx-switch" :class="{'is-checked': value, 'is-disabled': disabled}" @click="disabled ? '' : handleClick()">
    <span class="switch-text" :class="{'is-checked': checked }">{{activeText}}</span>
    <input
      class="xxx-switch__input"
      type="checkbox"
      :name="name"
      ref="input"
      :true-value="activeValue"
      :false-value="inactiveValue"
    >
    <span class="xxx-switch__core" ref="core">
      <span class="xxx-switch__button"></span>
    </span>
    <span class="switch-text" :class="{'is-checked': !checked}">{{inactiveText}}</span>
  </div>
</template>

<script>
export default {
  name: 'XxxSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeText: {
      type: String,
      default: ''
    },
    inactiveText: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled:{
      type: Boolean,
      default:false
    }
  },
  computed: {
      checked() {
        return this.value === this.activeValue;
      },
  },
  created() {
    if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit('input', this.inactiveValue);
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      // 点击的时候，还需要修改背景色
      // console.log(this.value)
      // 等待value发生了改变，在setColor
      // 数据修改后，等待DOM更新，在修改按钮的颜色
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        // console.log(color)
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    // 修改开关的颜色
    this.setColor()
    // 控制checkbox的checkbox
    this.$refs.input.checked = this.value
  }
}
</script>
<style lang="scss">
.xxx-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    .xxx-switch__input {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      margin: 0;
    }
    .xxx-switch__core {
      margin: 0;
      display: inline-block;
      position: relative;
      width: 40px;
      height: 20px;
      border: 1px solid #dcdfe6;
      outline: none;
      border-radius: 10px;
      box-sizing: border-box;
      background: #dcdfe6;
      cursor: pointer;
      transition: border-color .3s,background-color .3s;
      vertical-align: middle;
      .xxx-switch__button {
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        transition: all .3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
      }
    }
    .switch-text{
      margin: 0 10px;
    }
    .switch-text.is-checked{
      color: #409eff;
    }
  }
  .xxx-switch.is-checked {
    .xxx-switch__core {
      border-color: #409eff;
      background-color: #409eff;
      .xxx-switch__button {
        transform: translateX(20px);
      }
    }
  }
  .xxx-switch.is-disabled {
    opacity: .7;
    .xxx-switch__core {
      cursor: not-allowed;
    }
  }

  
</style>