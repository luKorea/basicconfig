<template>
    <div class="menu-wrapper">
      <a-menu>
        <a-menu-item>1111</a-menu-item>
        <a-menu-item>2222</a-menu-item>
        <a-submenu>
          <div slot="title">学习</div>
          <a-menu-item>3333</a-menu-item>
          <a-menu-item>4444</a-menu-item>
        </a-submenu>
      </a-menu>
    </div>
</template>

<script>
import MenuComponents from '_c/menu'
const { AMenu, AMenuItem, ASubmenu } = MenuComponents
export default {
  name: 'menu',
  components: {
    AMenu,
    AMenuItem,
    ASubmenu
  }
}
</script>

<style scoped lang="stylus">
  .menu-wrapper
    display inline-block
    text-align center
    width 300px
    height 300px
    line-height 40px
    font-size large
    cursor pointer
</style>
