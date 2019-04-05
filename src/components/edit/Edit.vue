<template>
  <Row>
    <div class="wrapper">
      <label for="name">姓名</label>
      <Input id="name" v-model="data[index].name" />
      <label for="age">年龄</label>
      <Input id="age" v-model="data[index].age" />
      <label for="address">地址</label>
      <Input id="address" v-model="data[index].address" />
    </div>
  </Row>
</template>
<script>
export default {
  name: 'add',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    index: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    console.log(this.data)
  },
  data () {
    return {
      name: '',
      age: '',
      address: ''
    }
  }
}
</script>
<style scoped lang="stylus">
  .wrapper
    margin-bottom 10px
</style>
