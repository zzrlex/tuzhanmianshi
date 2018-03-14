<template>
  <div id="app">
    <img width = "100%" src="./../static/picture/pic.fw.png">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <nav-footer></nav-footer>
    
  </div>
</template>

<script>
import NavFooter from "./base-components/footer"
export default {
  name: 'App',
  components:{
    NavFooter,
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.app
  position relative

</style>
