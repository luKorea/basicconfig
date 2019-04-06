<template>
  <Tree :data="data" show-checkbox></Tree>
</template>

<script>
export default {
  name: 'aTree',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
