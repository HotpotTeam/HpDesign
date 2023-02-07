<template>
  <div class="xxx-input" :class="{ 'xxx-input--suffix': showSuffix }">
    <!-- 如果传了show-password, 判断是否需要切换 密码的显示 如果不传，不判断 -->
    <input
      v-if="type != 'textarea'"
      class="xxx-input__inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      :maxlength="$attrs.maxlength"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
    <span v-if="isWordLimitVisible" class="xxx-input__count">
      <span class="xxx-input__count-inner">
        {{ textLength }}/{{ upperLimit }}
      </span>
    </span>
    <textarea
      v-if="type == 'textarea'"
      class="xxx-textarea__inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      :maxlength="$attrs.maxlength"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    >
    </textarea>
    <span class="xxx-input__suffix" v-if="showSuffix">
      <i
        class="xxx-input__icon icon xxx-icon-error_3"
        v-if="clearable && value"
        @click="clear"
      ></i>
      <i
        class="xxx-input__icon icon xxx-icon-view"
        v-if="showPassword"
        @click="handlePassword"
        :class="{ 'xxx-icon-view-active': passwordVisible }"
      ></i>
    </span>
    <span v-if="isWordLimitVisible" class="xxx-input__count">
      <span class="xxx-input__count-inner">
        {{ textLength }}/{{ upperLimit }}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "XxxInput",
  data() {
    return {
      // 用于控制是否显示密码框
      passwordVisible: false,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    },
    isWordLimitVisible() {
      return (
        this.showWordLimit &&
        this.$attrs.maxlength &&
        (this.type === "text" || this.type === "textarea") &&
        !this.inputDisabled &&
        !this.readonly &&
        !this.showPassword
      );
    },
    upperLimit() {
      return this.$attrs.maxlength;
    },
    textLength() {
      if (typeof this.value === "number") {
        return String(this.value).length;
      }

      return (this.value || "").length;
    },
    inputExceed() {
      return this.isWordLimitVisible && this.textLength > this.upperLimit;
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    clear() {
      // 把内容清空
      this.$emit("input", "");
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
    handleFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },
    handleChange(event) {
      this.$emit('change', event.target.value);
    },
  },
};
</script>
<style lang="scss">
.xxx-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .xxx-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .xxx-input__count {
    position: absolute;
    height: 100%;
    right: 5px;
    top: 0;
    height: 100%;
    display: inline-flex;
    align-items: center;
    color: #909399;
    font-size: 12px;
    .xxx-input__count-inner {
      background: #fff;
      line-height: normal;
      display: inline-block;
      padding: 0 5px;
    }
  }
  .xxx-textarea__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 42px;
    min-height: 42px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.xxx-input--suffix {
  .xxx-input__inner {
    padding-right: 30px;
  }
  .xxx-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .xxx-icon-view-active {
      color: blue;
    }
  }
}
</style>