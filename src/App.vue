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
  },
  mounted() {
    this.refreshRem();
  },
  methods: {
    refreshRem(){
        var dpr = window.devicePixelRatio;
        console.log(dpr)
        var rem;
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        if (width < 400) {
          rem = width / 25;
        } else {
          rem = 40;
        }
        document.body.style.fontSize = rem + 'px';
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.app
  position relative

</style>
