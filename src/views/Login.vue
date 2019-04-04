<template>
    <div class="login-wrapper">
      <label for="userName">用户名:&nbsp;</label>
      <input type="text" v-model="userName" id="userName"><br>
      <label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;</label>
      <input type="password" v-model="password" id="password"><br>
      <button @click="handleLogin">登录</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin () {
      this.login({
        userName: this.userName,
        password: this.password
      }).then(() => {
        this.$router.push({
          name: 'home'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
