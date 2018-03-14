<template>
  <div class = "outer">
      <div class="inputItem">
        <label for="theName">&nbsp;&nbsp;&nbsp;姓名：</label>
        <input type="text" name = "theName">
      </div>
      <div class="inputItem">
        <label for="telnum" >&nbsp;&nbsp;&nbsp;手机：</label>
        <input type="text" @input = "testNum" name = "telnum">
      </div>
      <div class="inputItem">
        <label for="dec">&nbsp;&nbsp;&nbsp;宣言：</label>
        <input type="text" name = "dec">
      </div>
      <div class = "upLoad">
        <div  class="showPic">
            <div v-show = "!upsuc">
                <img src="./../../static/picture/pic_show.fw.png" alt="">
                <span>上传个人照</span>
            </div>
            <img id = "showimg" width = "100%" height = "90%" v-show = "upsuc" src="" alt="">
        </div>
        <div class="selectFile">
            <input type="file" @change = "toShow" id = "file">
            <div class="words">
                <img src="./../../static/picture/camera.fw.png" alt="">
                <span>上传任意金额立白产品小票验证参赛资格</span>
            </div>
        </div>
      </div>
      <input type="submit" class = "inputItem sub">
  </div>
</template>

<script>
  export default {
    data() {
        return {
            upsuc:false
        }
    },
    methods:{
        toShow() {
            this.upsuc = true
            let r= new FileReader();
            var f=document.getElementById('file').files[0];
            r.readAsDataURL(f);
            r.onload=function  (e) {
                document.getElementById('showimg').src=this.result;
            };
        },
        testNum(e) {
            if(parseInt(e.target.value) ) {
                e.target.value = parseInt(e.target.value);
            } else {
                e.target.value = ''
            }
        }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.outer
    width 100%
    height 611px
    .inputItem
        width 78%
        height 60px
        margin 18px auto
        border 1px solid #DCDCDC
        border-radius 5px
        font-size 0.95rem
        label 
            color #808080
            line-height 64px
        input 
            height 90%
            width 60%
    .upLoad
        width 78%
        font-size 0.8rem
        color #808080
        margin 18px auto
        height 210px
        .selectFile 
            vertical-align top
            display inline-block
            width 48%
            height 100%
            input 
                opacity 0
                display block
                width 100%
                height 100%
            .words
                height 210px
                width 100%
                margin-top -210px
                z-index -1
                text-align center
                line-height 20px
                img 
                    display block
                    margin 0px auto 20px
                    padding-top 60px
        .showPic
            display inline-block
            width 48%
            height 100%
            text-align center
            line-height 60px
            img 
                display block
                margin 60px auto 0
            #showimg 
                margin 0
    .sub
        display block
        background-color #F1515D
        color #ffffff
        font-size 1.4rem
</style>