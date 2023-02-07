<!-- ---
title: '快速上手'
--- -->
# 快速上手

```vue
<template>
  <div id="app">
    <xxx-button type="primary">点击报名</xxx-button>
  </div>
</template>

<script>
import {Button} from 'xixixi-ui'
import 'xixixi-ui/dist/xixixi-ui.css'


export default {
  name: 'app',
  components: {
    'xxxx-button':Button
  }
}
</script>

```
<!-- <ClientOnly>
  <sakura-img/>
</ClientOnly> -->