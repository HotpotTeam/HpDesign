<template>
  <div>
    <h3>基本用法</h3>
    <p>基本表单组件，并在原生控件基础上进行了功能扩展，可以组合使用。</p>
    <xxx-card>
      <xxx-input
        v-model="value1" placeholder="请输入内容">
      </xxx-input>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </xxx-card>

    <!-- 为输入框状态添加错误状态 -->
    <h3>输入框状态</h3>
    <p>输入框可以设置禁用和错误状态。</p>
    <xxx-card>
      <xxx-input
        v-model="value2" placeholder="禁用状态" disabled>
      </xxx-input>
      <br/>
      <xxx-input
        v-model="value3" placeholder="错误状态" :error="true">
      </xxx-input>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
      </template>
    </xxx-card>

    <!-- 输入框尺寸 -->
    <h3>输入框尺寸</h3>
    <p>输入框定义了四种尺寸: 迷你, 小型, 适中（默认）, 大, 分别为: 20px, 30px, 40px, 60px。</p>
    <xxx-card>
      <div style="margin: 20px 0" >
      <span v-for="(item, index) in sizeArray" :key="index" >
         <xxx-button  @click="sizeObj=item">{{sizeName[index]}}</xxx-button>
      </span>
      </div>
      <xxx-input
        v-model="value4" placeholder="请输入内容" :size="sizeObj">
      </xxx-input>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
      </template>
    </xxx-card>

    <h3>可清空输入框</h3>
    <p>输入框一键快速清空。</p>
    <xxx-card>
      <xxx-input
        v-model="value5" placeholder="请输入内容" clearable>
      </xxx-input>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code4}}</code></pre>
      </template>
    </xxx-card>

    <h3>密码框</h3>
    <p>用于输入密码。</p>
    <xxx-card>
      <xxx-input
        v-model="value6" placeholder="请输入内容" showPassword>
      </xxx-input>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code5}}</code></pre>
      </template>
    </xxx-card>

   <h3>文本居中框</h3>
    <p>输入框文字居中。</p>
    <xxx-card>
      <xxx-input
        v-model="value7" placeholder="请输入内容" textCenter >
      </xxx-input>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code6}}</code></pre>
      </template>
    </xxx-card>


   <h3>前缀与后缀</h3>
    <p>通过指定 prefix 和 suffix 插槽来在输入框内添加前缀和后缀。</p>
    <xxx-card>
      <xxx-input
        v-model="value8" placeholder="请输入内容" >
        <template slot="prefix"><xxx-icon name='user' color="gray" size="30"> </xxx-icon></template>
      </xxx-input>

      <xxx-input
        v-model="value9" placeholder="请输入内容" >
        <template slot="suffix"><xxx-icon name='password' color="gray" size="30"> </xxx-icon></template>
      </xxx-input>

      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code7}}</code></pre>
      </template>
    </xxx-card>


    <h3>文本域</h3>
    <xxx-card>
      <xxx-input
        v-model="value5" placeholder="请输入内容" type="textarea" >
      </xxx-input>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code8}}</code></pre>
      </template>
    </xxx-card>


    <h3>限制长度</h3>
    <p>设置 max-length 可以限制最大字数，配合 show-word-limit 可以显示字数统计。</p>
    <xxx-card>
      <xxx-input
        v-model="value11" placeholder="请输入内容" maxlength="10" show-word-limit>
      </xxx-input>
      <xxx-input
        v-model="value12" placeholder="请输入内容" type="textarea" :maxlength="{maxlen:10, onlyError:true}" show-word-limit>
      </xxx-input>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code9}}</code></pre>
      </template>
    </xxx-card>
  </div>
</template>

<script>
import Input from "../../../packages/input/input.vue";
import Button from "../../../packages/button/button.vue";
import Icon from "../../../packages/icon/icon.vue";
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";

Vue.use(VueHighlightJS);
export default {
  data() {
    return {
      sizeName: ['迷你', '小型', '适中', '大'],
      sizeObj: {
        type: Object,
        default: function() {
          return {'medium': true};
        },
      },
      
      sizeArray: [
         {'mini': true},
         {'small': true},
         {'medium': true},
         {'large': true}

      ],


      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value12: '',
      code1: `
<xxx-input
    v-model="value1" placeholder="请输入内容">
</xxx-input>
data() {
  return {
    value1: true
  }
}
                `.trim(),
      code2: `
<xxx-input
    v-model="value2" placeholder="禁用状态" disabled>
</xxx-input>
<xxx-input
    v-model="value3" placeholder="错误状态" error>
</xxx-input>
data() {
  return {
    value2: '',
    value3: ''
  }
}
                `.trim(),
      code3: `
<xxx-input
    v-model="value4" placeholder="请输入内容" :size={'mini': true}>
</xxx-input>
<xxx-input
    v-model="value4" placeholder="请输入内容" :size={'small': true}>
</xxx-input>
<xxx-input
    v-model="value4" placeholder="请输入内容" :size={'medium': true}>
</xxx-input>
<xxx-input
    v-model="value4" placeholder="请输入内容" :size={'large': true}>
</xxx-input>

data() {
  return {
    value4: ''
  }
}
                `.trim(),



      code4: `
<xxx-input
    v-model="value5" placeholder="请输入内容" clearable>
</xxx-input>
data() {
  return {
    value5: ''
  }
}
                `.trim(),
      code5: `
<xxx-input
    v-model="value6" placeholder="请输入内容" showPassword>
</xxx-input>
data() {
  return {
    value6: ''
  }
}
                `.trim(),



      code6: `
<xxx-input
    v-model="value7" placeholder="请输入内容" textCenter>
</xxx-input>
data() {
  return {
    value7: ''
  }
}
                `.trim(),


      code7: `
      <xxx-input
        v-model="value8" placeholder="请输入内容" >
        <template slot="prefix">xxx</template>
      </xxx-input>

      <xxx-input
        v-model="value9" placeholder="请输入内容" >
        <template slot="suffix">xxx</template>
      </xxx-input>                
      data() {
        return {
          value8: '',
          value9: '',
        }
      }
      `.trim(),


      code8: `
<xxx-input
    v-model="value10" placeholder="请输入内容" type="textarea" >
</xxx-input>
data() {
  return {
    value10: ''
  }
}
                `.trim(),


                
      code9: `
<xxx-input
    v-model="value11" placeholder="请输入内容" maxlength="10" show-word-limit>
</xxx-input>
<xxx-input
    v-model="value12" placeholder="请输入内容" type="textarea" maxlength="{maxlen: 10, onlyError: true}" show-word-limit>
</xxx-input>
data() {
  return {
    value11: '',
    value12: '',
  }
}
                `.trim(),
    };
  },
  components: {
    "xxx-input": Input,
    "xxx-button": Button,
    "xxx-icon": Icon
  },
};
</script>
<style lang="scss">
@import url('../public/fonts/iconfont.css');
@import url('../public/newfonts/iconfont.css');
</style>


