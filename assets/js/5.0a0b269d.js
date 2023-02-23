(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{239:function(e,t,n){},241:function(e,t,n){"use strict";n(239)},242:function(e,t,n){"use strict";var s={name:"xxxIcon",props:{name:String,color:String,size:[Number,String],rotateAngle:{type:[Number,String],default:0},isRotate:{type:Boolean,default:!1},showText:{type:Boolean,default:!1}}},i=(n(241),n(15)),a=Object(i.a)(s,(function(){var e=this,t=e._self._c;return t("div",[t("i",{class:["icon","xxx-icon-"+e.name,1==e.isRotate?"keep-rotate":""],style:{color:e.color,"font-size":e.size+"px",transform:"rotate("+e.rotateAngle+"deg)"}}),e._v(" "),e.showText?t("span",[e._v(e._s(e.name))]):e._e()])}),[],!1,null,null,null);t.a=a.exports},249:function(e,t,n){},252:function(e,t,n){"use strict";n(249)},254:function(e,t,n){"use strict";var s={name:"XxxInput",data(){return{passwordVisible:!1,err:this.error}},props:{placeholder:{type:String,default:""},type:{type:String,default:"text"},name:{type:String,default:""},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},textCenter:{type:Boolean,default:!1},size:{type:Object,default:function(){return{mini:!1,small:!1,medium:!1,large:!1}}},value:{type:[String,Number],default:""},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1}},computed:{showSuffix(){return this.clearable||this.showPassword},isWordLimitVisible(){return this.showWordLimit&&this.$attrs.maxlength&&("text"===this.type||"textarea"===this.type)&&!this.inputDisabled&&!this.readonly&&!this.showPassword},upperLimit(){return this.$attrs.maxlength instanceof Object?this.$attrs.maxlength.maxlen:this.$attrs.maxlength},textLength(){return"number"==typeof this.value?String(this.value).length:(this.value||"").length},inputExceed(){return this.isWordLimitVisible&&this.textLength>this.upperLimit}},methods:{handleInput(e){this.$attrs.maxlength instanceof Object&&(e.target.value.length>10?this.err=!0:this.err=!1),this.$emit("input",e.target.value)},clear(){this.$emit("input","")},handlePassword(){this.passwordVisible=!this.passwordVisible},handleFocus(e){this.focused=!0,this.$emit("focus",e)},handleBlur(e){this.focused=!1,this.$emit("blur",e)},handleChange(e){this.$emit("change",e.target.value)}}},i=(n(252),n(15)),a=Object(i.a)(s,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"xxx-input",class:{"xxx-input--suffix":e.showSuffix}},[t("div",{staticClass:"inline-container"},[t("div",{staticClass:"input-prefix"},[e._t("prefix")],2),e._v(" "),"textarea"!=e.type?t("input",{staticClass:"xxx-input__inner",class:{"is-disabled":e.disabled,"is-error":e.err,...e.size},style:{"text-align":!0===e.textCenter?"center":""},attrs:{placeholder:e.placeholder,type:e.showPassword?e.passwordVisible?"text":"password":e.type,name:e.name,disabled:e.disabled,maxlength:e.$attrs.maxlength instanceof Object?524288:e.$attrs.maxlength},domProps:{value:e.value},on:{input:e.handleInput,focus:e.handleFocus,blur:e.handleBlur,change:e.handleChange}}):e._e(),e._v(" "),t("div",{staticClass:"input-prefix"},[e._t("suffix")],2)]),e._v(" "),e.isWordLimitVisible?t("span",{staticClass:"xxx-input__count"},[t("span",{staticClass:"xxx-input__count-inner"},[e._v("\n      "+e._s(e.textLength)+"/"+e._s(e.upperLimit)+"\n    ")])]):e._e(),e._v(" "),"textarea"==e.type?t("textarea",{staticClass:"xxx-textarea__inner",class:{"is-disabled":e.disabled,"is-error":e.err,...e.size},style:{"text-align":!0===e.textCenter?"center":""},attrs:{placeholder:e.placeholder,name:e.name,disabled:e.disabled,maxlength:e.$attrs.maxlength instanceof Object?524288:e.$attrs.maxlength},domProps:{value:e.value},on:{input:e.handleInput,focus:e.handleFocus,blur:e.handleBlur,change:e.handleChange}}):e._e(),e._v(" "),e.showSuffix?t("span",{staticClass:"xxx-input__suffix"},[e.clearable&&e.value?t("i",{staticClass:"xxx-input__icon icon xxx-icon-error_3",on:{click:e.clear}}):e._e(),e._v(" "),e.showPassword?t("i",{staticClass:"xxx-input__icon icon xxx-icon-view",class:{"xxx-icon-view-active":e.passwordVisible},on:{click:e.handlePassword}}):e._e()]):e._e(),e._v(" "),e.isWordLimitVisible?t("span",{staticClass:"xxx-input__count"},[t("span",{staticClass:"xxx-input__count-inner"},[e._v("\n      "+e._s(e.textLength)+"/"+e._s(e.upperLimit)+"\n    ")])]):e._e()])}),[],!1,null,null,null);t.a=a.exports},275:function(e,t,n){},276:function(e,t,n){},514:function(e,t,n){},515:function(e,t,n){"use strict";n(275)},516:function(e,t,n){"use strict";n(276)},539:function(e,t,n){"use strict";n.r(t);n(514);var s=n(254),i=n(242),a={name:"XxxInputNumber",inject:{elForm:{default:""},elFormItem:{default:""}},components:{"xxx-input":s.a,"xxx-icon":i.a},props:{step:{type:Number,default:1},stepStrictly:{type:Boolean,default:!1},max:{type:Number,default:1/0},min:{type:Number,default:-1/0},value:{},disabled:Boolean,name:String,label:String,placeholder:String,sameSides:{type:Boolean,default:!1},precision:{type:Number,validator:e=>e>=0&&e===parseInt(e,10)}},data:()=>({currentValue:0,userInput:null,timer:null,newStartTime:0,lastStartTime:0}),watch:{value:{immediate:!0,handler(e){let t=void 0===e?e:Number(e);if(void 0!==t){if(isNaN(t))return;if(this.stepStrictly){const e=this.getPrecision(this.step),n=Math.pow(10,e);t=Math.round(t/this.step)*n*this.step/n}void 0!==this.precision&&(t=this.toPrecision(t,this.precision))}t>=this.max&&(t=this.max),t<=this.min&&(t=this.min),this.currentValue=t,this.userInput=null,this.$emit("input",t)}}},computed:{minDisabled(){return this._decrease(this.value,this.step)<this.min||this.disabled},maxDisabled(){return this._increase(this.value,this.step)>this.max||this.disabled},numPrecision(){const{value:e,step:t,getPrecision:n,precision:s}=this,i=n(t);return void 0!==s?s:Math.max(n(e),i)},inputNumberDisabled(){return this.disabled||!!(this.elForm||{}).disabled},displayValue(){if(null!==this.userInput)return this.userInput;let e=this.currentValue;if("number"==typeof e){if(this.stepStrictly){const t=this.getPrecision(this.step),n=Math.pow(10,t);e=Math.round(e/this.step)*n*this.step/n}void 0!==this.precision&&(e=e.toFixed(this.precision))}return e}},methods:{toPrecision(e,t){return void 0===t&&(t=this.numPrecision),parseFloat(Math.round(e*Math.pow(10,t))/Math.pow(10,t))},getPrecision(e){if(void 0===e)return 0;const t=e.toString(),n=t.indexOf(".");let s=0;return-1!==n&&(s=t.length-n-1),s},_increase(e,t){if("number"!=typeof e&&void 0!==e)return this.currentValue;const n=Math.pow(10,this.numPrecision);return this.toPrecision((n*e+n*t)/n)},_decrease(e,t){if("number"!=typeof e&&void 0!==e)return this.currentValue;const n=Math.pow(10,this.numPrecision);return this.toPrecision((n*e-n*t)/n)},increase(){if(this.inputNumberDisabled||this.maxDisabled)return;const e=this.value||0,t=this._increase(e,this.step);this.setCurrentValue(t)},mouseStop(){clearInterval(this.delayTriggerTimer),clearInterval(this.timer)},mouseStart(e){this.delayTriggerTimer=setInterval(()=>{-1!=e.target.className.indexOf("add")||-1!=e.target.className.indexOf("up")?this.timer=setInterval(()=>this.increase(),100):this.timer=setInterval(()=>this.decrease(),100),clearInterval(this.delayTriggerTimer)},1e3)},decrease(){if(this.inputNumberDisabled||this.minDisabled)return;const e=this.value||0,t=this._decrease(e,this.step);this.setCurrentValue(t)},handleBlur(e){this.$emit("blur",e)},handleFocus(e){this.$emit("focus",e)},setCurrentValue(e){const t=this.currentValue;"number"==typeof e&&void 0!==this.precision&&(e=this.toPrecision(e,this.precision)),e>=this.max&&(e=this.max),e<=this.min&&(e=this.min),t!==e&&(this.userInput=null,this.$emit("input",e),this.$emit("change",e,t),this.currentValue=e)},handleInput(e){this.userInput=e},handleInputChange(e){const t=""===e?void 0:Number(e);isNaN(t)&&""!==e||this.setCurrentValue(t),this.userInput=null},select(){this.$refs.input.select()}},updated(){this.$refs&&this.$refs.input}},r=(n(515),n(15)),u=Object(r.a)(a,(function(){var e=this,t=e._self._c;return t("div",{class:["xxx-input-number",{"is-disabled":e.inputNumberDisabled}],on:{dragstart:function(e){e.preventDefault()}}},[t("xxx-input",{ref:"input",attrs:{value:e.displayValue,placeholder:e.placeholder,disabled:e.inputNumberDisabled,max:e.max,min:e.min,name:e.name,label:e.label,size:{medium:!0},"margin:auto":""},on:{blur:e.handleBlur,input:e.handleInput,change:e.handleInputChange},nativeOn:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.increase.apply(null,arguments))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.decrease.apply(null,arguments))}]}},[t("template",{slot:"prefix"},[e.sameSides?e._e():t("div",{staticClass:"prefix-sub-bothsides",attrs:{role:"button"},on:{click:e.decrease,mousedown:e.mouseStart,mouseup:e.mouseStop,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.decrease.apply(null,arguments)}}},[t("xxx-icon",{staticClass:"prefix-icon-bothsides",class:{"is-disabled-sub":e.minDisabled},attrs:{name:"sub"}})],1)]),e._v(" "),t("template",{slot:"suffix"},[e.sameSides?e._e():t("div",{staticClass:"suffix-add-bothsides",attrs:{role:"button"},on:{click:e.increase,mousedown:e.mouseStart,mouseup:e.mouseStop,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.increase.apply(null,arguments)}}},[t("xxx-icon",{staticClass:"suffix-icon-bothsides",class:{"is-disabled-sub":e.maxDisabled},attrs:{name:"add"}})],1),e._v(" "),e.sameSides?t("div",[t("div",{staticClass:"suffix-add-samesides",attrs:{role:"button"},on:{click:e.increase,mousedown:e.mouseStart,mouseup:e.mouseStop,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.increase.apply(null,arguments)}}},[t("xxx-icon",{staticClass:"suffix-icon-samesides",class:{"is-disabled-sub":e.maxDisabled},attrs:{name:"arrowup"}})],1),e._v(" "),t("div",{staticClass:"prefix-sub-samesides",attrs:{role:"button"},on:{click:e.decrease,mousedown:e.mouseStart,mouseup:e.mouseStop,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.decrease.apply(null,arguments)}}},[t("xxx-icon",{staticClass:"prefix-icon-samesides",class:{"is-disabled-sub":e.minDisabled},attrs:{name:"arrowdown"}})],1)]):e._e()])],2)],1)}),[],!1,null,null,null).exports,l=n(0),o=n(243),d=n.n(o);l.a.use(d.a);var c={data:()=>({num1:1,num2:1,num3:1,num4:1,num5:1,code1:'\n<xxx-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></xxx-input-number>\n<xxx-input-number v-model="num2" @change="handleChange" :min="1" :max="10" sameSides></xxx-input-number>\ndata() {\n  return {\n    num1: 1,\n    num2: 1,\n  }\n},\nmethods: {\n  handleChange(value) {\n  }\n},\n                '.trim(),code2:'\n<xxx-input-number v-model="num3" disabled></xxx-input-number>\ndata() {\n  return {\n    num3: 1,\n  }\n}\n                '.trim(),code3:'\n<xxx-input-number v-model="num4" :step="2"></xxx-input-number>\ndata() {\n  return {\n    num4: 1,\n  }\n}\n                '.trim(),code4:'\n<xxx-input-number v-model="num5" :precision="2" :step="0.1"></xxx-input-number>\ndata() {\n  return {\n    num5: 1,\n  }\n}\n                '.trim()}),components:{"xxx-input-number":u},methods:{handleChange(){}}},h=(n(516),Object(r.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v("基本用法")]),e._v(" "),t("p",[e._v("有两种类型，支持设置不同大小，支持长短按操作。")]),e._v(" "),t("xxx-card",{attrs:{cpyMsg:e.code1},scopedSlots:e._u([{key:"code",fn:function(){return[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"vue"},[e._v(e._s(e.code1))])])]},proxy:!0}])},[t("xxx-input-number",{attrs:{min:1,max:10},on:{change:e.handleChange},model:{value:e.num1,callback:function(t){e.num1=t},expression:"num1"}}),e._v(" "),t("xxx-input-number",{attrs:{min:1,max:10,sameSides:""},on:{change:e.handleChange},model:{value:e.num2,callback:function(t){e.num2=t},expression:"num2"}})],1),e._v(" "),t("h3",[e._v("禁用状态")]),e._v(" "),t("xxx-card",{attrs:{cpyMsg:e.code2},scopedSlots:e._u([{key:"code",fn:function(){return[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"vue"},[e._v(e._s(e.code2))])])]},proxy:!0}])},[t("xxx-input-number",{attrs:{disabled:""},model:{value:e.num3,callback:function(t){e.num3=t},expression:"num3"}})],1),e._v(" "),t("h3",[e._v("步数")]),e._v(" "),t("xxx-card",{scopedSlots:e._u([{key:"code",fn:function(){return[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"vue"},[e._v(e._s(e.code3))])])]},proxy:!0}])},[t("xxx-input-number",{attrs:{step:2},model:{value:e.num4,callback:function(t){e.num4=t},expression:"num4"}})],1),e._v(" "),t("h3",[e._v("精度")]),e._v(" "),t("xxx-card",{attrs:{cpyMsg:e.code3},scopedSlots:e._u([{key:"code",fn:function(){return[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"vue"},[e._v(e._s(e.code4))])])]},proxy:!0}])},[t("xxx-input-number",{attrs:{precision:3,step:.1},model:{value:e.num5,callback:function(t){e.num5=t},expression:"num5"}})],1)],1)}),[],!1,null,null,null));t.default=h.exports}}]);