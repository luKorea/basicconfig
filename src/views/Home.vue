<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="getUser">获取用户列表</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld'
import { getUserInfo } from '@/api/user'

export default {
  name: 'home',
  components: {
    HelloWorld

  },
  methods: {
    getUser () {
      getUserInfo({ userId: 20 }).then(res => {
        console.log(res)
      })
    }
  }
  // 进入当前页面 （组件守卫）
  /* beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm)
    })
  }, */
  // 当离开该页面
  /* beforeRouteLeave (to, from, next) {
    const leave = confirm('你确定要离开吗')
    if (leave) next()
    else next(false)
  } */
}
</script>
