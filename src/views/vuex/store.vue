<template>
    <div>
      <VInput v-model="inputValue" />
      <p>同步用户输入的内容{{inputValue }}</p>
      <p>{{'应用名:'+ appName }}</p>
      <p>{{'用户名:' + userName }}</p>
      <p>{{ appNameVersion }}</p>
      <p>last in: {{ lastString }}</p>
      <button @click="handleChange">改变项目的名字</button>
      <p>{{ appVersion }}</p>
    </div>
</template>

<script>
import VInput from '@/components/VInput'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    VInput
  },
  computed: {
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion
    }),
    ...mapGetters(['appNameVersion']),
    lastString () {
      return this.inputValue.substr(-1, 1)
    }
  },
  methods: {
    ...mapMutations(['SET_APP_NAME', 'SET_APP_VERSION']),
    handleChange () {
      this.SET_APP_NAME('korea_demo_test')
      this.SET_APP_VERSION()
    }
  }
}
</script>

<style scoped>

</style>
