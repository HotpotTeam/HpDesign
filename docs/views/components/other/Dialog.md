<ClientOnly>
  <xxx-dialog/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| visible | 是否显示 Dialog，支持 .sync 修饰符 | boolean / boolean |- | false |
| title | 是否Dialog 的标题，也可通过具名 slot传入禁用 | string |- |- |
| width | Dialog 的宽度 | string |- | 50% |
| top | Dialog中的 margin-top 值 | string |- | 15vh |
| center | 	是否对头部和底部采用居中布局 | boolean |- | false |

<font size=5>Slot</font>
| name| 说明 
| :------ | ------ |
| — | 	Dialog 的内容 |
| title | 	Dialog 标题区的内容 |
| footer | 	Dialog 按钮操作区的内容 |

</ClientOnly>
