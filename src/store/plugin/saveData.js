export default store => {
  // 提交完mutations后触发该函数
  // 弱国本地存在该字段，将其解析
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => {
    localStorage.state = JSON.stringify(state)
  })
}
