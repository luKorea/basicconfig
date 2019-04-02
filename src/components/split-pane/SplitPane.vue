<template>
    <div class="split-pane-wrapper">
      <div class="pane pane-left" :style="{width: leftOffset}">
        <button @click="handleClick" class="btn">改变区域大小</button>
      </div>
      <div class="split-pane-midline"></div>
      <div class="pane pane-right" :style="{left: leftOffset}"></div>
    </div>
</template>

<script>
export default {
  name: 'SplitPane',
  data () {
    return {
      leftWidth: 0.4
    }
  },
  computed: {
    leftOffset () {
      return `${this.leftWidth * 100}%`
    }
  },
  methods: {
    handleClick () {
      this.leftWidth -= 0.02
    }
  }
}
</script>

<style scoped lang="stylus">
  .split-pane-wrapper
    height 100%
    position relative
    .pane
      position absolute
      top 0
      height 100%
    .pane-left
      background-color antiquewhite
    .pane-right
      right 0
      bottom 0
      background-color #97bf86
    .split-pane-midline
      width 1%
      height 100%
      background-color cornflowerblue
</style>
