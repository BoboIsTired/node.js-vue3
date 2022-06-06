<template>
  <div class="story">
    <img class="bg" src="@/assets/area/z-story-background.png" alt="">

    <div class="title">
      地区
    </div>

    <van-grid class="areaGrid" :column-num="2" :border=false >
      <van-grid-item v-for="(value,index) in areaList" :key="index" icon="photo-o">
        <div ><img class="areaSplash" :src="value.picUrl" ></div>
        <img class="areaIcon" :src="value.iconUrl" >
        <span>{{value.areaName}}</span>
      </van-grid-item>
    </van-grid>

  </div>
</template>


<script>
import {reactive,toRefs,onMounted} from 'vue'
import axios from "axios"
// axios.get("http://localhost:3000/api/area",{

// })

export default {
  setup() {
    const state = reactive({
      areaList:[],
      // imgList:[
      //   // require("https://game.gtimg.cn/images/lol/universe/v1/assets/images/factions/ionia-01.jpg")
      //   "https://game.gtimg.cn/images/lol/universe/v1/assets/images/factions/ionia-01.jpg",
      //   "https://game.gtimg.cn/images/lol/universe/v1/assets/images/factions/noxus_splash.jpg"
      // ],
      // iconList:[
      //   "http://game.gtimg.cn/images/lol/universe/images/iona_crest_icon.png",
      //   "http://game.gtimg.cn/images/lol/universe/images/noxus_crest_icon.png"
      // ]

    })


    onMounted(() => {
       axios({
        method:'get',
        url:'/area'
      }).then(res=>{
        state.areaList = res.data
        console.log(state.areaList)
      })
    });
    return {
      ...toRefs(state),
    }
  },
  
}
</script>


<style lang="less" scoped>
.story{
  height: 14.25rem;
  width: 7.5rem;
  position: fixed;
  left: 0;
  top: 1rem;
  background-color: rgba(38,38,38,1);
  overflow: scroll;
  .bg{
    width: 7.5rem;
    height: auto;
    position: fixed;
    left:0;
    top: 0;
    z-index: -1;
  }
  .title{
    font-size: 19px;
    font-weight: 900;
    color: #fff;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
  .areaGrid{
    margin-top: 1rem;
    color: #fff;
    padding: 0 0 ;
    // width: 3.5rem;
    .areaSplash{
      width: 3.4rem;
      height: 1.6rem;
      position: absolute;
      left: 8px;
      top: 20px;
      // drop-shadow(0px 6px 11px #000);
      filter:brightness(50%)
    }
    .areaSplash:active{
      filter:brightness(100%)
    }
    .areaIcon{
      width: 0.6rem;
      height: 0.7rem;
      z-index: 10;
      filter:brightness(150%);
      
    }
    span{
      z-index: 10;
      margin-top: 0.5rem;
    }
  }
  /deep/ .van-grid-item__content{
    padding: 0 0 ;
    margin: 0 0;
    background-color:rgba(255, 255, 255, 0);
    margin-top: 00.5rem;
    width: 3.5rem;
    height: 2.5rem;

  }
  // /deep/ .van-grid-item{
  //   // width: 3.5rem;
  //   // padding: 0 0;
  // }
}
</style>