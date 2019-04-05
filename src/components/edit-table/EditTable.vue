<template>
  <Table
    :columns="columns"
    :data="data"
    stripe
    border>
    <template slot-scope="{ row, index }" slot="action">
      <Button type="primary" size="small"
              style="margin-right: 5px"
              @click="show(index)"
      >详情</Button>
      <Button type="success" size="small"
              style="margin-right: 5px"
              @click="edit(index)"
      >编辑</Button>
      <Button type="error" size="small"
              @click="remove(index)"
      >删除</Button>
    </template>
  </Table>
</template>

<script>
import add from '_c/edit'
export default {
  name: 'EditTable',
  data () {
    return {
      editId: ''
    }
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    // 详情
    show (index) {
      this.$Modal.info({
        title: '详细内容',
        content: `
            名字：${this.data[index].name}<br>
            年龄：${this.data[index].age}<br>
            地址：${this.data[index].address}<br>
            修改时间: ${this.data[index].date}
            `
      })
    },
    // 编辑
    edit (index) {
      this.$Modal.confirm({
        scrollable: true,
        okText: '保存',
        render: (h) => {
          return h(add, {
            props: { data: this.data, index },
            on: {
              name (name) {
                this.data.name = name
              },
              age (age) {
                this.data.age = age
              },
              address (address) {
                this.data.address = address
              }
            }
          })
        },
        onOk: () => {
          if (this.data.name === '' || this.data.age === '' || this.data.address === '') {
            this.$Message.error('信息填写不完整!')
          }
          this.saveLink()
        }
      })
    },
    // 保存
    saveLink () {
      this.$Notice.success({
        title: '修改成功'
      })
      this.$router.push('/table')
    },
    //删除
    remove (index) {
      this.$Modal.confirm({
        title: 'Title',
        content: '<p>你确定要删除该数据吗</p>',
        onOk: () => {
          this.data.splice(index, 1)
        },
        onCancel: () => {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
