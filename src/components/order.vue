<template>
  <div>
    <div class="nav">
      <div ><span class = "navcur">总排行</span></div>
      <div ><span >当日排行</span></div>
    </div>
    <div class="order">
        <ul>
            <li>排名</li>
            <li>昵称</li>
            <li>编号</li>
            <li>实际数</li>
        </ul>
        <ul v-for = "(item,index) in orderList" :key = "index" @click = "curIndex = index" :class= "{afterTop:index>0,topTwo:index==0,curSelect:curIndex == index}">
            <li>
                <div class = 'first'>{{index+1}}</div>
            </li>
            <li>{{item.name}}</li>
            <li>{{'0'+item.id}}</li>
            <li>{{item.ticketcount}}票</li>
            <li class = "icon" v-if = "index < 3">
                <img :src="'./../../static/picture/'+index+'.png'" alt="">
            </li>
        </ul>
    </div>
    
    <div class = "bott"></div>
  </div>
</template>

<script>
  export default {
    data() {
        return{
            orderList:[],
            curIndex:-1
        }
    },
    mounted() {
        this.getList();
    },
    methods:{
        getList(flag) {
          this.$http.get("http://100jc.net/goddess/jml/god_goddess",{//请求参数
            params: {
              page:1,
            }
          }).then(function(res){
            if (flag) {
              this.orderList = this.orderList.concat(JSON.parse(res.bodyText).data)
            } else {
              this.orderList = JSON.parse(res.bodyText).data
            }
          },function(){
            //console.log(1)
          });
        },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.nav
  font-size 1rem
  color #686868
  border-top 11px solid #F5F5F5
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
.order
    font-size 1rem
    width 100%
    .afterTop
        border-top 1px solid #000000
    .topTwo 
        border-top 1px solid #006F49
    ul 
        width 100%
        color #4D4D4D
        border-top 1px solid #D5B55E
        height 50px
        line-height 50px
        text-align center
        li 
            display inline-block
            width 23%
            height 50px
            z-index 1
        .first
            width 26px
            height 26px
            margin  auto
            border-radius 13px
            z-index -1
            background-color #F1515D
            line-height 26px
        .icon
            height 50px
            transform translate(-105%,-55px)
    .curSelect
        background-color #F1515D
        color #ffffff
        .first
            background-color #ffffff
            color #F4717B
.bott
  width 100%
  height 120px
</style>