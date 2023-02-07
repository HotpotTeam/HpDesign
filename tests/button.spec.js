import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Button from '@pack/button/button.vue'

describe('button.vue',()=>{
    it('button class', async ()=>{
        const wrapper  = mount(Button)
        await wrapper.setProps({ type: 'warning' })
        expect(wrapper.classes()).toContain('xxx-button--warning')
    }),
    it('点击 button 触发 click 事件', async () => {
        const wrapper  = mount(Button,{
            slots:{
                default:"按钮"
            }
        })
        wrapper.vm.$emit('handleClick', 123)
        await wrapper.vm.$nextTick() // 等待事件处理完成
        expect(wrapper.emitted().handleClick).toBeTruthy()
    })
})