<template>
  <!-- 对话框的遮罩 .self代表只有点击自己才触发 -->
  <transition name="dialog-fade">
    <div class="xxx-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="xxx-dialog" :style="{width, marginTop: top}">
        <div class="xxx-dialog__header" :class="{'xxx-dialog__cenrer': center}">
          <slot name="title">
            <span class="xxx-dialog__title">{{title}}</span>
          </slot>
          <button class="xxx-dialog__headerbtn" @click="handleClose">
            <i class="icon xxx-icon-remove"></i>
          </button>
        </div>
        <div class="xxx-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="xxx-dialog__footer" :class="{'xxx-dialog__cenrer': center}" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'XxxDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss">
.xxx-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0,0,0, .5);
  
    .xxx-dialog {
      position: relative;
      margin: 15vh auto 50px;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,.3);
      box-sizing: border-box;
      width: 30%;
      .xxx-dialog__cenrer{
        text-align: center;
      }
      &__header {
        padding: 20px 20px 10px;
        .xxx-dialog__title {
          line-height: 24px;
          font-size: 18px;
          color: #303133;
        }
        .xxx-dialog__headerbtn {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 16px;
          .el-icon-close {
            color: #909399;
          }
        }
      }
  
      &__body {
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
      }
      &__footer {
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
        // 深度选择器 scss ::v-deep  less /deep/  css >>>
        ::v-deep .xxx-button:first-child {
          margin-right: 20px;
        }
      }
    }
  }
  
  .dialog-fade-enter-active {
    animation: fade .3s;
  }
  
  .dialog-fade-leave-active {
    animation: fade .3s reverse;
  }
  
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  
</style>

