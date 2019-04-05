<template>
  <div id="app">
    <router-view/>
   <!-- <transition name="router">

    </transition>-->
  </div>
</template>
<style lang="stylus">
html,body
  height 100%
body
  margin 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b98
.router-enter
  opacity 0
.router-enter-active
  transition opacity 1s ease
.router-enter-to
  opacity 1
.router-leave
  opacity 1
.router-leave-active
  transition opacity 1s ease
.router-leave-to
  opacity 0
</style>
