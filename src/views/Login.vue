<template>
    <div class="login-wrapper">
      <label for="userName">用户名:&nbsp;</label>
      <Input v-model="userName" placeholder="Enter something..." style="width: 300px" id="userName" /><br>
      <label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;</label>
      <Input v-model="password" placeholder="Enter something..." style="width: 300px" id="password" /><br>
      <button @click="handleLogin">登录</button>
      <button @click="testClick">测试接口</button>
      {{name}}
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: '',
      name: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin () {
      this.login({
        userName: this.userName,
        password: this.password
      }).then(() => {
        console.log('success!!')
        this.$router.push('/home')
      }).catch(error => {
        console.log(error)
      })
    },
    testClick () {
      axios.get('/byid/123456').then(res => {
        const data = res.data
        console.log(data)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
