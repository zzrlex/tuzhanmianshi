<template>
      <ul class = "tab">
          <div class = "line"></div>
          <li :class = "{show:currentIndex == index}" v-for = "(item,index) in curTabCell" :key = "index" class = "tabCell" @click = "currentIndex = index">
              <div class = "cell">
                  <img :src="'static/picture/'+item.src" alt=""/>
                  <span >{{item.words}}</span>
              </div>
          </li>
          <li   class = "tabCell">
              <div class = "cell">
                  <img src="static/picture/tab4.png" alt=""/>
                  <span >奖品及规则</span>
              </div>
          </li>
      </ul>
</template>

<script>
  export default {
    data () {
        return {
            currentIndex:0,
            tabcell:[
                {
                    src:"tab12.png",
                    words:"首页"
                },
                {
                    src:"tab21.png",
                    words:"报名"
                },
                {
                    src:"tab31.png",
                    words:"排行"
                }
            ]
        }
    },
    mounted() {
        if (this.$route.path == '/enter')
        this.currentIndex = 1;
        if (this.$route.path == '/order')
        this.currentIndex = 2;
    },
    computed:{
        curTabCell() {
            let cur = this.tabcell.map((item,index)=>{
                let temp = item.src.split('.');
                if (index == this.currentIndex) {
                    temp[0] = temp[0].substr(0,4)+'2';
                } else {
                    temp[0] = temp[0].substr(0,4)+'1';
                }
                item.src = temp.join('.');
                return item;
            })
            return cur;

        }
    },
    watch: {
        currentIndex: function(newc,oldc) {
            if (newc == 0) {
                this.$router.push("/index");
            }
            if (newc == 1) {
                this.$router.push("/enter");
            }
            if (newc == 2) {
                this.$router.push("/order");
            }
        }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

.tab
    width 100%
    background-color #fff
    height 9%
    position fixed
    color #A5A5A5
    bottom 0
    border-top 2px
    border-color #000 transparent transparent transparent
    .tabCell 
        position relative
        float left
        width 25%
        height 100%
        text-align center
    .cell
        display block
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        padding 3px 0
        white-space nowrap
        img
            display block
            margin 0 auto
    .show
        color #F1515D
    .line
        width 100%
        height 2px
        background-color #F5F5F5
</style>