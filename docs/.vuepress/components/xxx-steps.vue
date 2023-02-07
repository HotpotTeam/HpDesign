<template>
  <div >
    <h3>基础用法</h3>
    <sakura-card>
      <xxx-steps :active="active1">
        <xxx-step title="步骤 1"  ></xxx-step>
        <xxx-step title="步骤 2" ></xxx-step>
        <xxx-step title="步骤 3"></xxx-step>
      </xxx-steps>
      <xxx-button type="primary" @click="set1">下一步</xxx-button>

      <template v-slot:code><pre v-highlightjs><code class="vue">{{code1}}</code></pre></template>
    </sakura-card>

    <h3>自定义完成样式提示颜色</h3>
    <sakura-card>
       <xxx-steps :active="active2" step-finish-color="#409eff">
        <xxx-step title="步骤 1"  ></xxx-step>
        <xxx-step title="步骤 2"  ></xxx-step>
        <xxx-step title="步骤 3" ></xxx-step>
      </xxx-steps>
      <xxx-button type="primary" @click="set2">下一步</xxx-button>
      
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code2}}</code></pre></template>
    </sakura-card>

    <h3>带图标的步骤条</h3>
    <sakura-card>
       <xxx-steps :active="active3" space="200" >
        <xxx-step title="步骤 1" description="1992年我出生" icon="view"></xxx-step>
        <xxx-step title="步骤 2" description="1999年我上学前班" icon="view"></xxx-step>
        <xxx-step title="步骤 3" description="2005年我小学毕业" icon="view"></xxx-step>
       </xxx-steps>
      <xxx-button type="primary" @click="set3">下一步</xxx-button>
      
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code3}}</code></pre></template>
    </sakura-card>

    <h3>垂直步骤条</h3>
    <sakura-card>
       <xxx-steps :active="active4"  direction="vertical" style="height:300px">
        <xxx-step title="步骤 1"  ></xxx-step>
        <xxx-step title="步骤 2"  ></xxx-step>
        <xxx-step title="步骤 3" ></xxx-step>
      </xxx-steps>
      <xxx-button type="primary" @click="set4">下一步</xxx-button>
      
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code4}}</code></pre></template>
    </sakura-card>

  </div>
</template>
<script>
import Steps from '../../../packages/step/steps.vue'
import Step from '../../../packages/step/step.vue'
import Button from '../../../packages/button/button.vue'
export default {
  data(){
    return {
      active1: 1,
      active2: 1,
      active3: 1,
      active4: 1,
      code1: `
        <xxx-steps :active="active1">
          <xxx-step title="步骤 1"  ></xxx-step>
          <xxx-step title="步骤 2" ></xxx-step>
          <xxx-step title="步骤 3"></xxx-step>
        </xxx-steps>
      `.replace(/^ {8}/gm, "").trim(),
      code2: `
        <xxx-steps :active="active2" step-finish-color="#409eff">
          <xxx-step title="步骤 1"  ></xxx-step>
          <xxx-step title="步骤 2"  ></xxx-step>
          <xxx-step title="步骤 3" ></xxx-step>
        </xxx-steps>
      `.replace(/^ {8}/gm, "").trim(),
      code3: `
        <xxx-steps :active="active3" space="200" >
          <xxx-step title="步骤 1" description="1992年我出生" icon="view"></xxx-step>
          <xxx-step title="步骤 2" description="1999年我上学前班" icon="view"></xxx-step>
          <xxx-step title="步骤 3" description="2005年我小学毕业" icon="view"></xxx-step>
        </xxx-steps>
      `.replace(/^ {8}/gm, "").trim(),
      code4: `
        <xxx-steps :active="active4"  direction="vertical" style="height:300px">
          <xxx-step title="步骤 1"></xxx-step>
          <xxx-step title="步骤 2"></xxx-step>
          <xxx-step title="步骤 3"></xxx-step>
        </xxx-steps>
      `.replace(/^ {8}/gm, "").trim(),
    }
  },
  methods: {
    set1(){
      if(this.active1===3){
        this.active1 = 0
        return
      }
      this.active1++
    },
    set2(){
       if(this.active2===3){
        this.active2 = 0
        return
      }
      this.active2++
    },
    set3(){
       if(this.active3===3){
        this.active3 = 0
        return
      }
      this.active3++
    },
    set4(){
      if(this.active4===3){
        this.active4 = 0
        return
      }
      this.active4++
    }
  },
  components:{
    'xxx-steps':Steps,
    'xxx-step':Step,
    'xxx-button': Button,
  }
}
</script>
<style lang="scss" scoped>

 .highlight{
  color:#3ba0e9;
  font-weight: bold;
}
</style>
