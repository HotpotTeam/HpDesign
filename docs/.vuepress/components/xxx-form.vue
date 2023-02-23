<template>
  <div>
    <h2>基本表单</h2>
    <xxx-card>
      <xxx-form :model="form">
        <xxx-form-item label="用户名">
          <xxx-input v-model="form.value1" placeholder="请输入姓名"></xxx-input>
        </xxx-form-item>
        <xxx-form-item label="性别">
          <xxx-radio v-model="form.radio1" label="1">男</xxx-radio>
          <xxx-radio v-model="form.radio1" label="2">女</xxx-radio>
        </xxx-form-item>
        <xxx-form-item label="种类选择">
          <xxx-select v-model="form.selectValue" placeholder="请选择">
            <template v-slot:xxx_option>
              <xxx-option
                v-for="item in form.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </xxx-option>
            </template>
          </xxx-select>
        </xxx-form-item>
        <xxx-form-item label="兴趣爱好">
          <xxx-checkbox v-model="form.checked1">选项1</xxx-checkbox>
          <xxx-checkbox v-model="form.checked2">选项2</xxx-checkbox>
          <xxx-checkbox v-model="form.checked3">选项3</xxx-checkbox>
        </xxx-form-item>
        <xxx-form-item>
          <xxx-button type="primary" @click="submit()">提交</xxx-button>
        </xxx-form-item>
      </xxx-form>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </xxx-card>
    <h2>对齐方式</h2>
    <xxx-card>
      <xxx-radio v-model="labelPosition" label="left">左对齐</xxx-radio>
      <xxx-radio v-model="labelPosition" label="right">右对齐</xxx-radio>
      <br /><br />
      <xxx-form
        :model="formInline"
        labelWidth="60px"
        :labelPosition="labelPosition"
      >
        <xxx-form-item label="账号">
          <xxx-input
            v-model="formInline.account"
            placeholder="请输入账号"
          ></xxx-input>
        </xxx-form-item>
        <xxx-form-item label="用户名">
          <xxx-input
            v-model="formInline.name"
            placeholder="请输入用户名"
          ></xxx-input>
        </xxx-form-item>
      </xxx-form>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
      </template>
    </xxx-card>
  </div>
</template>
<script>
import RadioGround from "../../../packages/radio-group/radio-group.vue";
import Button from "../../../packages/button/button.vue";
import Option from "../../../packages/select/option.vue";
import Select from "../../../packages/select/select.vue";
import Radio from "../../../packages/radio/radio.vue";
import Checkbox from "../../../packages/checkbox/checkbox.vue";
import Input from "../../../packages/input/input.vue";
import FormItem from "../../../packages/form-item/form-item.vue";
import form from "../../../packages/form/form.vue";
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
  data() {
    return {
      form: {
        value1: "",
        checked1: true,
        checked2: false,
        checked3: false,
        radio1: "1",
        selectValue: "",
        options: [
          {
            value: "选项1",
            label: "苹果"
          },
          {
            value: "选项2",
            label: "橘子"
          },
          {
            value: "选项3",
            label: "香蕉"
          }
        ]
      },
      formInline: {
        account: "",
        name: ""
      },
      labelPosition: "left",
      code1: `
      <xxx-form :model="form">
        <xxx-form-item label="用户名">
          <xxx-input v-model="form.value1" placeholder="请输入姓名"></xxx-input>
        </xxx-form-item>
        <xxx-form-item label="性别">
          <xxx-radio v-model="form.radio1" label="1">男</xxx-radio>
          <xxx-radio v-model="form.radio1" label="2">女</xxx-radio>
        </xxx-form-item>
        <xxx-form-item label="种类选择">
          <xxx-select v-model="form.selectValue" placeholder="请选择">
            <template v-slot:xxx_option>
              <xxx-option
                v-for="item in form.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </xxx-option>
            </template>
          </xxx-select>
        </xxx-form-item>
        <xxx-form-item label="兴趣爱好">
          <xxx-checkbox v-model="form.checked1">选项1</xxx-checkbox>
          <xxx-checkbox v-model="form.checked2">选项2</xxx-checkbox>
          <xxx-checkbox v-model="form.checked3">选项3</xxx-checkbox>
        </xxx-form-item>
        <xxx-form-item>
          <xxx-button type="primary" @click="submit()" style="margin-left: 32px"
            >提交</xxx-button
          >
        </xxx-form-item>
      </xxx-form>
data () {
    return {
    form: {
        value1: "",
        checked1: true,
        checked2: false,
        checked3: false,
        radio1: "1",
        selectValue: "",
        options: [
          {
            value: "选项1",
            label: "苹果"
          },
          {
            value: "选项2",
            label: "橘子"
          },
          {
            value: "选项3",
            label: "香蕉"
          }
        ]
      }
    };
}
                `.trim(),
      code2: `
      <xxx-radio v-model="labelPosition" label="left">左对齐</xxx-radio>
      <xxx-radio v-model="labelPosition" label="right">右对齐</xxx-radio>
      <br /><br />
      <xxx-form
        :model="form"
        labelWidth="60px"
        :labelPosition="labelPosition"
      >
        <xxx-form-item label="账号">
          <xxx-input
            v-model="form.account"
            placeholder="请输入账号"
          ></xxx-input>
        </xxx-form-item>
        <xxx-form-item label="用户名">
          <xxx-input
            v-model="form.name"
            placeholder="请输入用户名"
          ></xxx-input>
        </xxx-form-item>
      </xxx-form>
data () {
    return {
    form: {
        account: "",
        name: ""
      },
      labelPosition: "left",
    };
}
                `.trim()
    };
  },
  components: {
    "xxx-form": form,
    "xxx-input": Input,
    "xxx-form-item": FormItem,
    "xxx-checkbox": Checkbox,
    "xxx-radio": Radio,
    "xxx-option": Option,
    "xxx-select": Select,
    "xxx-button": Button,
    "xxx-radio-ground": RadioGround
  },
  methods: {
    submit() {
      console.log("submit");
    }
  }
};
</script>
<style>
</style>
