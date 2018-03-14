<template>
  <div>
    <ul class = "count">
      <li class = 'cell'>
        <div class="outer">
        <span>参与数</span>
        <br>
        <span class = "redword">42036</span>
        </div>
      </li>
      <div class = 'bre'></div>
      <li class = 'cell'>
        <div class="outer">
        <span>总票数</span>
        <br>
        <span class = "redword">42036</span>
        </div>
      </li>
      <div class = 'bre'></div>
      <li class = 'cell'>
        <div class="outer">
        <span>访问量</span>
        <br>
        <span class = "redword">42036</span>
        </div>
      </li>
    </ul>
    <div class="search">
      <div class="searchInput">
        <label for = "search"><img src="./../../static/picture/search.fw.png" alt=""></label>
        <input type="text" name = "search" class = 'inp' placeholder="输入编号搜索参赛者">
        <input type="submit" value = "搜索" class = 'sub'>
      </div>
    </div>
    <div class="photo">
      <div class="nav">
        <div @click = "sortByHot" ><span :class = "{navcur:desccol===''}">热门作品</span></div>
        <div @click = "sortByDate"><span :class = "{navcur:desccol==='createtime'}">最新上传</span></div>
      </div>
      <div class="showPhoto">
        <ul class ="clearfix">
          <li v-for = "(item,index) in photoList" :key = "index">
            <img v-lazy="item.photo" alt="">
            <div class="overlay">
              &nbsp;&nbsp;&nbsp;{{item.name}}<span class = "number">{{item.ticketcount}}票&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div class="bottom">点我投票</div>
          </li>
        </ul>
      </div>
      <div class="view-more-normal"
           v-infinite-scroll="loadMore"
           infinite-scroll-disabled="busy"
           infinite-scroll-distance="20">
        <img src="./../../static/picture/loading-spinning-bubbles.svg" v-show="loading">
      </div>
    </div>
    <div class = "bott"></div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      photoList:[],
      page:1,
      desccol:"createtime",
      loading:false,
      busy:false
    }
  },
  mounted(){
    this.getList();
  },
  methods: {
    getList(flag) {
      this.loading = true;
      this.$http.get("http://100jc.net/goddess/jml/god_goddess",{//请求参数
        params: {
          page:this.page,
          desccol:this.desccol
        }
      }).then(function(res){
        //console.log(JSON.parse(res.bodyText).data)
        this.loading = false;
        if (flag) {
          this.photoList = this.photoList.concat(JSON.parse(res.bodyText).data)
        } else {
          this.photoList = JSON.parse(res.bodyText).data
        }
        if (JSON.parse(res.bodyText).data.length < 9) {
          this.busy = true;
        } else {
          this.busy = false;
        }
      },function(){
        //console.log(1)
      });
    },
    loadMore(){
      this.busy = true;
      setTimeout(() => {
        this.page++;
        this.getList(true);
      }, 500);
    },
    sortByHot() {
      this.page = 1
      this.desccol = "";
      this.getList();
    },
    sortByDate(){
      this.page = 1
      this.desccol = "createtime";
      this.getList();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~@/assets/stylus/variable"
.count
  color #686868
  display flex
  position relative
  font-size: 0.92rem
  width 100%
  height 100px
  .bre 
    display inline-block
    margin auto 0
    width 1px
    height 53px
    background-color #C0C0C0
  .cell
    flex-grow 1
    position relative
    text-align center
    .outer
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      white-space nowrap
      span
        display inline-block
        padding 7px
    .redword
      color #F2515D
.search
  position relative
  background-color #F5F5F5
  width 100%
  height 102px
  .searchInput
    font-size: 0.84rem
    position absolute
    width 90%
    height 64px
    border-radius 11px
    background-color #FFFFFF
    top 50%
    left 50%
    transform translate(-50%,-50%)
    label
      display inline-block
      transform translate(20px,22px)
    .inp
      margin-left 35px
      position absolute
      width 60%
      height 40%
      top 50%
      transform translateY(-50%)
    .sub
      position absolute
      color #F2515D
      font-size 1rem
      right 0
      width 20%
      height 40px
      top 50%
      background-color #ffffff
      transform translateY(-50%)
.photo 
  border-top 2px solid #DCD0B4
  border-bottom  0
.nav
  color #686868
  border-bottom  2px solid #D5B55E
  display flex
  width 100%
  height 74px
  div
    flex-grow 1
    position relative
    text-align center
    span
      display inline-block
      width 5.5rem
      box-sizing border-box
      line-height 70px
      font-size 1rem
      border-bottom 4px solid #ffffff
    .navcur
      color #F2515D
      border-bottom 4px solid #F1515D
.showPhoto
  width 100%
  ul 
    width 100% 
    li 
      border 2px solid #DCDCDC
      position relative
      margin 1%
      float left
      width 30vw
      img 
        display block
        width 100%
        height 23vh
        z-index -1
      .bottom 
        height 40px
        background-color #F2515D
        line-height 40px
        text-align center 
        font-size 0.8rem
      .overlay 
        height 40px
        width 100%
        line-height 40px
        position absolute
        background-color $color-text-d 
        font-size 0.65rem
        bottom 40px
        .number
          float right
          z-index 1
.clearfix:after
  content "."
  display block
  height 0
  clear both
  visibility hidden
.view-more-normal
  text-align center
.bott
  width 100%
  height 120px

</style>
