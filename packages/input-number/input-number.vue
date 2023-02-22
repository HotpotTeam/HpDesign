<template>
  <div
    @dragstart.prevent
    :class="[
      'xxx-input-number',
      { 'is-disabled': inputNumberDisabled },
    ]">

    <xxx-input
      ref="input"
      :value="displayValue"
      :placeholder="placeholder"
      :disabled="inputNumberDisabled"
      :max="max"
      :min="min"
      :name="name"
      :label="label"
      :size="{medium: true}"
      margin:auto

      @keydown.up.native.prevent="increase"
      @keydown.down.native.prevent="decrease"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleInputChange">
 
      <template slot="prefix">
        <div v-if="!sameSides"
        role="button"
        class="prefix-sub-bothsides"
        
        @click="decrease"
        @mousedown="mouseStart"
        @mouseup="mouseStop"
        @keydown.enter="decrease">
        <xxx-icon class='prefix-icon-bothsides' :class="{'is-disabled-sub': minDisabled}" name='sub'> </xxx-icon>
        </div>
      </template>

      <template slot="suffix">
        
        <div v-if="!sameSides"
        role="button"
        class="suffix-add-bothsides"
        @click="increase"
        @mousedown="mouseStart"
        @mouseup="mouseStop"
        @keydown.enter="increase"
        >
        <xxx-icon class='suffix-icon-bothsides' :class="{'is-disabled-sub': maxDisabled}" name='add'></xxx-icon>
        </div>

        <div v-if="sameSides">


        <div 
        role="button"
        class="suffix-add-samesides"
        @click="increase"
        @mousedown="mouseStart"
        @mouseup="mouseStop"
        @keydown.enter="increase"
        >
        <xxx-icon class='suffix-icon-samesides' :class="{'is-disabled-sub': maxDisabled}" name='arrowup' ></xxx-icon>
        </div>



        <div
        role="button"
        class="prefix-sub-samesides"
        @click="decrease"
        @mousedown="mouseStart"
        @mouseup="mouseStop"
        @keydown.enter="decrease">
        <xxx-icon class='prefix-icon-samesides' :class="{'is-disabled-sub': minDisabled}" name='arrowdown' > </xxx-icon>
        </div>

        </div>
        </template>

    </xxx-input>
  </div>
</template>
<script>
// import '../../src/assets/fonts/iconfont.css'
import '../../src/assets/newfonts/iconfont.css'
import xxxInput from '../input/input.vue';
import xxxIcon from '../icon/icon.vue';
  export default {
    name: 'XxxInputNumber',
    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },
    components: {
      'xxx-input': xxxInput,
      'xxx-icon': xxxIcon,
    },
    props: {
      step: {
        type: Number,
        default: 1
      },
      stepStrictly: {
        type: Boolean,
        default: false
      },
      max: {
        type: Number,
        default: Infinity
      },
      min: {
        type: Number,
        default: -Infinity
      },
      value: {},
      disabled: Boolean,
      name: String,
      label: String,
      placeholder: String,
      
      sameSides: {
        type: Boolean,
        default: false
      },

     


      precision: {
        type: Number,
        validator(val) {
          return val >= 0 && val === parseInt(val, 10);
        }
      }
    },
    data() {
      return {
        currentValue: 0,
        userInput: null,
        timer: null,
				newStartTime:0,
				lastStartTime:0,
      };
    },
    watch: {
      value: {
        immediate: true,
        handler(value) {
          let newVal = value === undefined ? value : Number(value);
          if (newVal !== undefined) {
            if (isNaN(newVal)) {
              return;
            }

            if (this.stepStrictly) {
              const stepPrecision = this.getPrecision(this.step);
              const precisionFactor = Math.pow(10, stepPrecision);
              newVal = Math.round(newVal / this.step) * precisionFactor * this.step / precisionFactor;
            }

            if (this.precision !== undefined) {
              newVal = this.toPrecision(newVal, this.precision);
            }
          }
          if (newVal >= this.max) newVal = this.max;
          if (newVal <= this.min) newVal = this.min;
          this.currentValue = newVal;
          this.userInput = null;
          this.$emit('input', newVal);
        }
      }
    },
    computed: {
      minDisabled() {
        return this._decrease(this.value, this.step) < this.min || this.disabled;
      },
      maxDisabled() {
        return this._increase(this.value, this.step) > this.max || this.disabled;
      },
      numPrecision() {
        const { value, step, getPrecision, precision } = this;
        const stepPrecision = getPrecision(step);
        if (precision !== undefined) {
          if (stepPrecision > precision) {
          }
          return precision;
        } else {
          return Math.max(getPrecision(value), stepPrecision);
        }
      },
      inputNumberDisabled() {
        return this.disabled || !!(this.elForm || {}).disabled;
      },
      displayValue() {
        if (this.userInput !== null) {
          return this.userInput;
        }

        let currentValue = this.currentValue;

        if (typeof currentValue === 'number') {
          if (this.stepStrictly) {
            const stepPrecision = this.getPrecision(this.step);
            const precisionFactor = Math.pow(10, stepPrecision);
            currentValue = Math.round(currentValue / this.step) * precisionFactor * this.step / precisionFactor;
          }

          if (this.precision !== undefined) {
            currentValue = currentValue.toFixed(this.precision);
          }
        }

        return currentValue;
      }
    },
    methods: {
      toPrecision(num, precision) {
        if (precision === undefined) precision = this.numPrecision;
        return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision));
      },
      getPrecision(value) {
        if (value === undefined) return 0;
        const valueString = value.toString();
        const dotPosition = valueString.indexOf('.');
        let precision = 0;
        if (dotPosition !== -1) {
          precision = valueString.length - dotPosition - 1;
        }
        return precision;
      },
      _increase(val, step) {
        if (typeof val !== 'number' && val !== undefined) return this.currentValue;

        const precisionFactor = Math.pow(10, this.numPrecision);
        return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor);
      },
      _decrease(val, step) {
        if (typeof val !== 'number' && val !== undefined) return this.currentValue;

        const precisionFactor = Math.pow(10, this.numPrecision);

        return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor);
      },
      increase() {
        if (this.inputNumberDisabled || this.maxDisabled) return;
        const value = this.value || 0;
        const newVal = this._increase(value, this.step);
        this.setCurrentValue(newVal);
      },

 
      // 支持长按操作
			mouseStop(){
        clearInterval(this.delayTriggerTimer);
				clearInterval(this.timer);
			},

			mouseStart(event){
        this.delayTriggerTimer = setInterval(()=> {
          // 防止感染短按
          if (event.target.className.indexOf('add') != -1) this.timer = setInterval(()=>this.increase(),100);
          else  this.timer = setInterval(()=>this.decrease(),100);
          clearInterval(this.delayTriggerTimer);
        }, 1000);
			},


		

      decrease() {
        if (this.inputNumberDisabled || this.minDisabled) return;
        const value = this.value || 0;
        const newVal = this._decrease(value, this.step);
        this.setCurrentValue(newVal);
      },
      handleBlur(event) {
        this.$emit('blur', event);
      },
      handleFocus(event) {
        this.$emit('focus', event);
      },
      setCurrentValue(newVal) {
        const oldVal = this.currentValue;
        if (typeof newVal === 'number' && this.precision !== undefined) {
          newVal = this.toPrecision(newVal, this.precision);
        }
        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        if (oldVal === newVal) return;
        this.userInput = null;
        this.$emit('input', newVal);
        this.$emit('change', newVal, oldVal);
        this.currentValue = newVal;
      },
      handleInput(value) {
        this.userInput = value;
      },
      handleInputChange(value) {
        const newVal = value === '' ? undefined : Number(value);
        if (!isNaN(newVal) || value === '') {
          this.setCurrentValue(newVal);
        }
        this.userInput = null;
      },
      select() {
        this.$refs.input.select();
      }
    },
    updated() {
      if (!this.$refs || !this.$refs.input) return;
    }
  };
</script>
<style lang="scss">

.xxx-input-number .xxx-input__inner {
    -webkit-appearance: none;
    width: 200px;
    height: 60px;
    text-align: center;
    border-radius: 0px;
 

}


.prefix-sub-bothsides, .suffix-add-bothsides {
  position: relative;
  text-align: center;
  z-index: 1;
  background: #f5f7fa;
  color: #606266;
  cursor: pointer;
  width: 40px;
  height: 100%;
}


.is-disabled-sub,  .is-disabled-add {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;

}

.prefix-sub-bothsides {
    border-radius: 4px 0 0 4px;

}
.suffix-add-bothsides {
    border-radius: 0 4px 4px 0;
}





.suffix-icon-bothsides, .prefix-icon-bothsides {
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
}


</style>
