<ClientOnly>
  <xxx-input-number/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value / v-model | 绑定值 | 	 number |- | 0 |
| min | 最小值 | 	number  |- | - |
| max | 最大值 | number |- | - |
| disabled | 禁用 | boolean |- | false |
| step | 步长| number |- | 1 |
| precision | 精度 | number |- | - |

<font size=5>Methods</font>
| 事件名称| 说明 | 回调参数 |
| :------ | ------ | ------ | ------ | ------ |
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 绑定值被改变时触发 | currentValue |

</ClientOnly>
