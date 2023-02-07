<template>
  <label
    class="xxx-radio"
    :class="{
      'is-checked': label === model,
      'is-border': border,
      'is-disabled': disabled,
      'is-medium': size == 'medium',
      'is-small': size == 'small',
      'is-mini': size == 'mini',
    }"
  >
    <span class="xxx-radio__input">
      <span class="xxx-radio__inner"></span>
      <input
        class="xxx-radio__original"
        type="radio"
        :value="label"
        :name="name"
        v-model="model"
        :disabled="disabled"
        @change="handleChange"
      />
    </span>
    <span class="xxx-radio__label">
      <slot></slot>
      <!-- 如果没有传内容，我们就把label当成内容 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "XxxRadio",
  // 需要提供一个计算属性 model
  inject: {
    RadioGroup: {
      default: "",
    },
  },
  computed: {
    model: {
      get() {
        // this.RadioGroup.value
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        // 触发父组件给当前组件注册的input事件
        if (!this.disabled) {
          this.$emit("input", value);
          this.isGroup
            ? this.RadioGroup.$emit("input", value)
            : this.$emit("input", value);
        }
      },
    },
    isGroup() {
      // 用于判断radio是否被radioGroup所包裹
      return !!this.RadioGroup;
    },
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: "",
    },
    value: null,
    name: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    border: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods:{
      handleChange() {
      this.$nextTick(() => {
        this.$emit('change', this.model);
      });
    }
  }
};
</script>
<style lang="scss">
.xxx-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .xxx-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .xxx-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .xxx-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .xxx-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.xxx-radio.is-checked {
  .xxx-radio__input {
    .xxx-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .xxx-radio__label {
    color: #409eff;
  }
}
.xxx-radio.is-border {
  border: 1px solid #ccc;
  padding: 12px 16px;
  border-radius: 4px;
}
.xxx-radio.is-border.is-small {
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 4px;
}
.xxx-radio.is-border.is-mini {
  border: 1px solid #ccc;
  padding: 6px 10px;
  border-radius: 4px;
}
.xxx-radio.is-checked.is-border {
  border: 1px solid #409eff;
}
.xxx-radio.is-disabled {
  .xxx-radio__input {
    .xxx-radio__inner {
      border-color: #ccc;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .xxx-radio__label {
    color: #ccc;
  }
}
.xxx-radio.is-checked.is-disabled {
  .xxx-radio__input {
    .xxx-radio__inner {
      background: #ccc;
    }
  }
}
</style>
