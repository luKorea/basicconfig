<template>
    <div>
      <VInput v-model="inputValue" />
      {{ inputValue }}
    </div>
</template>

<script>
import VInput from '@/components/VInput'
export default {
  name: 'store',
  components: {
    VInput
  },
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>

<style scoped>

</style>
