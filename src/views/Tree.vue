<template>
    <div>
      <a-tree  :data="data" />
    </div>
</template>

<script>
import aTree from '_c/tree'
import { getFolderData } from '@/api/data'
export default {
  name: 'Tree',
  components: {
    aTree
  },
  data () {
    return {
      data: []
    }
  },
  mounted () {
    getFolderData().then(res => {
      const result = res.data
      if (result.code === 200) this.data = result.data
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
