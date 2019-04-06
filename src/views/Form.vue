<template>
   <from-demo
      :formValidate="formValidate"
   />
</template>

<script>
import fromDemo from '_c/form'
export default {
  name: 'Form',
  components: { fromDemo },
  data () {
    return {
      formValidate: {
        username: '',
        password: '',
        age: 18
      }
    }
  }
}
</script>

<style scoped>

</style>
