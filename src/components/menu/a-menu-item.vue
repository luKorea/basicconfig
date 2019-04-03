<template>
      <li class="a-menu-item">
        <slot></slot>
      </li>
</template>

<script>
export default {
  nmae: 'AMenuItem'
}
</script>

<style lang="stylus" scoped>
  .a-menu-item
    background-color antiquewhite
    margin-bottom 10px
</style>
