<template>
  <Form ref="formValidate" :model="formValidate" inline>
    <FormItem prop="user">
    <Input type="text" v-model="formValidate.username" placeholder="Username">
      <Icon type="ios-person-outline" slot="prepend"></Icon>
    </Input>
    </FormItem>
    <br>
    <FormItem prop="password">
      <Input type="password" v-model="formValidate.password" placeholder="Password">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <br>
    <FormItem prop="age">
      <Input type="text" v-model="formValidate.age" number>
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <br>
    <FormItem>
      <Button type="primary" @click="handleSubmit">登录</Button>
    </FormItem>
  </Form>
</template>
<script>
import { postData } from '@/api/user'
export default {
  name: 'form',
  props: {
    formValidate: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    handleSubmit () {
      postData(this.formValidate).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
