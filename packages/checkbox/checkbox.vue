<template>
  <label
    class="xxx-checkbox"
    :class="{
      'is-checked': isChecked,
      'is-border': border,
      'is-disabled': disabled,
      'is-medium': size == 'medium',
      'is-small': size == 'small',
      'is-mini': size == 'mini',
    }"
  >
    <span class="xxx-checkbox__input">
      <span class="xxx-checkbox__inner"></span>
      <input
        type="checkbox"
        class="xxx-checkbox__original"
        :name="name"
        v-model="model"
        :value="label"
      />
    </span>
    <span class="xxx-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "XxxCheckbox",
  inject: {
    CheckboxGroup: {
      default: "",
    },
  },
  computed: {
    isGroup() {
      return !!this.CheckboxGroup;
    },
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(value) {
        if (!this.disabled) {
          this.isGroup
            ? this.CheckboxGroup.$emit("input", value)
            : this.$emit("input", value);
        }
      },
    },
    isChecked() {
      // 如果是group包裹，判断 label是否在model中
      // 如果没有group包裹，直接使用model
      return this.isGroup ? this.model.includes(this.label) : this.model;
    },
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    label: {
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
};
</script>
<style lang="scss">
.xxx-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .xxx-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .xxx-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .xxx-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .xxx-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.xxx-checkbox.is-checked {
  .xxx-checkbox__input {
    .xxx-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .xxx-checkbox__label {
    color: #409eff;
  }
}
.xxx-checkbox.is-border{
  border: 1px solid #ccc;
  padding: 12px 16px;
  border-radius: 4px;
}
.xxx-checkbox.is-border.is-small{
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 4px;
}
.xxx-checkbox.is-border.is-mini{
  border: 1px solid #ccc;
  padding: 6px 10px;
  border-radius: 4px;
}
.xxx-checkbox.is-checked.is-border{
  border: 1px solid #409eff;
}
.xxx-checkbox.is-disabled {
  .xxx-checkbox__input {
    .xxx-checkbox__inner {
      border-color: #ccc;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .xxx-checkbox__label {
    color: #ccc;
  }
}
.xxx-checkbox.is-checked.is-disabled {
  .xxx-checkbox__input {
    .xxx-checkbox__inner {
      background-color: #ccc;
    }
  }
}
</style>
