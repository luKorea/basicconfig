<template>
    <div>
      <p>计数器</p>
      <count-to  :end-value="100">
        <span slot="left">时间:</span>
        <span slot="right">秒</span>
      </count-to>
    </div>
</template>

<script>
import CountTo from '@/components/count-to/index'
export default {
  name: 'Count',
  components: {
    CountTo
  }
}
</script>

<style scoped>

</style>
