<template>
  <!-- <span @after-leave="handleAfterLeave"> -->
  <span>
    <div
      :class="[
        'xxx-toast',
        type && !iconClass ? `xxx-toast--${ type }` : '',
        center ? 'is-center' : '',
      ]"
      :style="positionStyle"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      role="alert">
      <i :class="iconClass" v-if="iconClass"></i>
      <i :class="typeClass" v-else></i>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="xxx-toast__content">{{ toast }}</p>
        <p v-else v-html="toast" class="xxx-toast__content"></p>
      </slot>
      <i v-if="showClose" class="xxx-toast__closeBtn icon xxx-icon-remove" @click="close"></i>
    </div>
  </span>
</template>

<script type="text/babel">
  const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  };

  export default {
    data() {
      return {
        visible: false,
        toast: '',
        duration: 3000,
        type: 'info',
        iconClass: '',
        customClass: '',
        onClose: null,
        showClose: false,
        closed: false,
        verticalOffset: 80,
        timer: null,
        dangerouslyUseHTMLString: false,
        center: false
      };
    },

    computed: {
      typeClass() {
        return this.type && !this.iconClass
          ? `xxx-toast__icon icon xxx-icon-${typeMap[this.type]}`
          : '';
      },
      positionStyle() {
        return {
          'top': `${ this.verticalOffset }px`
        };
      }
    },

    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
        }
      }
    },
    mounted() {
      this.startTimer();
    },
    methods: {
      handleAfterLeave() {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },

      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },

      clearTimer() {
        clearTimeout(this.timer);
      },

      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      },
    },
  };
</script>

<style lang="scss">
.xxx-toast {
    min-width: 380px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    position: fixed;
    left: 50%;
    top: 80px;
    transform: translateX(-50%);
    background-color: #edf2fc;
    transition: opacity .3s,transform .4s,top .4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
}
.xxx-toast--success {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
}
.xxx-toast--warning {
    background-color: #fdf6ec;
    border-color: #faecd8;
}
.xxx-toast--error {
    background-color: #fef0f0;
    border-color: #fde2e2;
}
.xxx-toast--success .xxx-toast__content {
    color: #67c23a;
}
.xxx-toast .xxx-icon-warning {
    color: #e6a23c;
}
.xxx-toast--error .xxx-toast__content {
    color: #f56c6c;
}
.xxx-toast .xxx-icon-info {
    color: #909399;
}
.xxx-toast__content {
    padding: 0;
    font-size: 14px;
    line-height: 1;
}
.xxx-toast p {
    margin: 0;
}
.xxx-toast__icon {
    margin-right: 10px;
}
[class*=" xxx-icon-"], [class^=xxx-icon-] {
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.xxx-toast.is-center{
  text-align: center;
}
</style>