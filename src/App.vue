<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 防止数据丢失
  created () {
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background-color: #e0e1e6;
}

</style>
