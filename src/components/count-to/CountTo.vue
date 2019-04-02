<template>
    <div>
      <slot name="left"></slot>
      <span :id="eleId"></span>
      <slot name="right"></slot>
    </div>
</template>

<script>
import Countup from 'countup'
export default {
  name: 'CountTo',
  data () {
    return {
      count: {}
    }
  },
  computed: {
    eleId () {
      // 动态获取id值
      return `count_id_${this._uid}`
    }
  },
  props: {
    // 起始值
    startValue: {
      type: Number,
      default: 0
    },
    // 最终值
    endValue: {
      type: Number,
      require: true
    },
    // 小数点后保留几位
    decimals: {
      type: Number,
      default: 0
    },
    // 设置延迟时间
    delay: {
      type: Number,
      default: 0
    },
    // 渐变时长
    duration: {
      type: Number,
      default: 1
    },
    // 设置加载动画
    useEasing: {
      type: Boolean,
      default: false
    },
    // 设置分组
    useGrouping: {
      type: Boolean,
      default: true
    },
    // 设置分隔符
    separator: {
      type: String,
      default: ','
    },
    // 设置小数位的分隔符
    decimal: {
      type: String,
      default: '.'
    }
  },
  mounted () {
    // 当所有DOM元素渲染后，才会调用该函数
    this.$nextTick(() => {
      this.count = new Countup(
        this.eleId, this.startValue,
        this.endValue, this.decimals,
        this.duration, {
          useEasing: this.useEasing,
          useGrouping: this.useGrouping,
          separator: this.separator,
          decimal: this.decimal
        })
      setTimeout(() => {
        this.count.start()
      }, this.delay)
    })
  }
}
</script>

<style scoped>

</style>
