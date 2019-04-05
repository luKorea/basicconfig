<template>
  <edit-table
    :columns="columns"
    :data="tableData"
  >
  </edit-table>
</template>

<script>
import EditTable from '_c/edit-table'
// import { getDateData } from '@/api/data'
export default {
  name: 'Table',
  components: {
    EditTable
  },
  data () {
    return {
      columns: [
        {
          title: '名字',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age',
          editable: true
        },
        {
          title: '地址',
          key: 'address',
          editable: true
        },
        {
          title: '修改时间',
          key: 'date'
        },
        {
          title: '操作',
          slot: 'action',
          align: 'center'
        }
      ],
      tableData: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }]
    }
  }/*,
  mounted () {
    getDateData().then(res => {
      const data = res.data
      this.tableData = data
      console.log(res)
    })
  } */
}
</script>

<style scoped lang="stylus">
.data-table
  width 100%
  margin auto
  text-align center
  table-layout fixed
</style>
