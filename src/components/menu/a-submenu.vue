<template>
  <div class="a-submenu">
    <div class="a-submenu-title" @click="handleClick">
      <slot name="title"></slot>
    </div>
     <div  v-show="showCul" class="a-submenu-cul">
       <slot></slot>
     </div>
  </div>
</template>

<script>
export default {
  nmae: 'ASubmenu',
  data () {
    return {
      showCul: false
    }
  },
  methods: {
    handleClick () {
      this.showCul = !this.showCul
    }
  }
}
</script>

<style lang="stylus">
  .a-submenu-title
    background-color cornflowerblue
    margin-bottom 10px
  .a-submenu-cul
    overflow hidden
</style>
