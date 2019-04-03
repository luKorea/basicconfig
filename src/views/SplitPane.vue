<template>
  <div class="split">
    <div class="split-pane-count">
    <split :value.sync="offset"></split>
    </div>
  </div>
</template>

<script>
import Split from '_c/split-pane/index'
export default {
  name: 'SplitPane',
  components: {
    Split
  },
  data () {
    return {
      offset: 0.8
    }
  }
}
</script>

<style scoped lang="stylus">
  .split
    text-align center
    .split-pane-count
      display inline-block
      width 400px
      height 300px
      background-color pink
</style>
