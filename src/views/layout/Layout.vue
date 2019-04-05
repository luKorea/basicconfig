<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-title">测试系统</div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <Card shadow class="page-card">
              <router-view />
            </Card>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'Layouts',
  data () {
    return {
      name: `<a href="http://www.baidu.com">百度一下</a>`
    }
  }
}
</script>

<style scoped lang="stylus">
.layout
  border: 1px solid #d7dde4
  background: #f5f7f9
  position: relative
  border-radius: 4px
  overflow: hidden
  height: 100%
  .layout-title
    text-align center
    color white
    font-size 48px
  .ivu-layout
    height 100%
</style>
