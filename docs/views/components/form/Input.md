<ClientOnly>
  <xxx-input/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| type | 类型 | string |- | text，textarea 和其他 原生 input 的 type 值 |
| v-model | 绑定值 | 	string / number / boolean |- | - |
| placeholder | 输入框占位文本 | 	string  |- | - |
| disabled | 是否禁用 | boolean |- | false |
| clearable | 是否可清空 | boolean |- | false |
| showPassword | 是否密码输入框 | boolean |- | false |
| maxlength | 最大输入长度 | number |- | - |
| show-word-limit | 是否显示输入字数统计 | boolean |- | false |

<font size=5>Methods</font>
| 事件名称| 说明 | 回调参数 |
| :------ | ------ | ------ | ------ | ------ |
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| input | 在 Input 值改变时触发 | (value: string / number) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string / number) |

</ClientOnly>
