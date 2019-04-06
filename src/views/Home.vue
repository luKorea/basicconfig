<template>
  <div class="home">
    <!--<button @click="getUser">获取用户列表</button>-->
    <button @click="tests">测试接口</button>
   <component :is="s" :type="type">
   </component>
  </div>
</template>

<script>
// @ is an alias to /src
import { getUserInfo } from '@/api/user'
export default {
  name: 'home',
  data () {
    return {
      s: 'script',
      type: 'text/javascript',
      d: '',
      fn: Function
    }
  },
  methods: {
    getUser () {
      getUserInfo({ userId: 20 }).then(res => {
        console.log(res)
      })
    },
    tests () {
      fetch('/tests/2')
        .then(res => {
          return res.json()
        }).then(data => {
          this.fn = data.drc
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
<style scoped lang="stylus">
</style>
