<template>
  <div class="theHero">

    <svg class="iconBack" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-yiliaohangyedeICON-"></use>
    </svg>

    <img class="bg" :src="heroBgUrl">
    <img class="heroPic" :src="heroPicUrl" >

    <div class="heroLine" v-if="heroLine==0">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shanglu"></use>
      </svg>
    </div>
    <div class="heroLine" v-if="heroLine==1">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-daye"></use>
      </svg>
    </div>
    <div class="heroLine" v-if="heroLine==2">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-a-1SVG"></use>
      </svg>
    </div>
    <div class="heroLine" v-if="heroLine==3">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xialu"></use>
      </svg>
    </div>
    <div class="heroLine" v-if="heroLine==4">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fuzhu"></use>
      </svg>
    </div>
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shanglu"></use>
    </svg> -->

    <div class="particulars">
      <span class="heroname">{{nickname}} {{name}}</span>
      <div class="xiangqing"  is-link @click="showPopup">
        查看详情
      </div>

      <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
      <van-popup 
        class="msgPopup"
        :show="show" 
        position="bottom" 
        :style="{ height: '50%' ,background:'rgba(38,38,38,1)'}"
        @click="close"
        round
      >
        <!-- 信息 -->
        <div class="msg">
          <!-- 技能 -->
          <div class="skills">
            <img class="skill" src="@/assets/skill/RumbleB.png">
            <img class="skill" src="@/assets/skill/RumbleQ.png">
            <img class="skill" src="@/assets/skill/RumbleW.png">
            <img class="skill" src="@/assets/skill/RumbleE.png">
            <img class="skill" src="@/assets/skill/RumbleR.png">
          </div>
          <!-- 胜率 -->
          <div class="rate">
            胜率: <span class="winSpan">{{winRate}}</span>
          </div>
          <!-- Ban率 -->
          <div class="rate">
            Ban率: <span class="banSpan">{{banRate}}</span>
          </div>
          <!-- 登场率 -->
          <div class="rate">
            Ban率: <span class="inSpan">{{inRate}}</span>
          </div>

        </div>

      </van-popup>

    </div>
  </div>
</template>

<script>

import { ref } from 'vue';
import store from '@/store/index.js'

export default {
  data:function(){
    return{
      nickname:store.state.searchList[this.$route.query.id].nickname,
      name:store.state.searchList[this.$route.query.id].name,
      winRate:store.state.searchList[this.$route.query.id].winRate,
      banRate:store.state.searchList[this.$route.query.id].banRate,
      inRate:store.state.searchList[this.$route.query.id].inRate,
      heroPicUrl:store.state.searchList[this.$route.query.id].heroPicUrl,
      heroBgUrl:store.state.searchList[this.$route.query.id].heroBgUrl,
      heroLine:store.state.searchList[this.$route.query.id].line,
    }
  },

  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    const close = () => {
      show.value = false;
    };
    return {
      show,
      showPopup,
      close,
    };


  },
}
</script>


<style lang="less" scoped>
.theHero{
  width: 7.5rem;
  height: 100%;
  position: fixed;
  left: 0;
  top: 1rem;
  background-color: rgba(38,38,38,1);
  display: block;

  .heroLine{

    width: 1rem;
    height: 1rem;
    background-color:rgba(0, 0, 0, 0.8);
    // border: 2px solid rgba(190,140,40,0.7);
    position: absolute;
    z-index: 1000;
    top: 10rem;
    left: 3.4rem;
    .icon{
      fill: #aaa;
      width: 0.7rem;
      height: 0.7rem;
      margin-top: 0.15rem;
      margin-left: 0.15rem;
    }
  }
  // .icon{
  //   fill: #fff;
  //   width: 0.7rem;
  //   height: 0.7rem;
  //   background-color:rgba(0, 0, 0, 0.6);
  //   border: 2px solid rgba(190,140,40,0.7);
  //   position: absolute;
  //   z-index: 1000;
  //   top: 10rem;
  //   left: 3.4rem;
  // }
  
  .iconBack{
    width: 00.8rem;
    height: 00.5rem;
    position: fixed;
    margin-top: 0.7rem;
    margin-left: 0.5rem;
    border: 2px solid rgba(190,140,40,0.7);
    background-color: rgba(34,34,34,0.5);
  }
  .heroPic{
    margin-top: 2rem;
    margin-left: 1rem;
    width: 5.5rem;
    height: auto;
  }
  .bg{
      position: fixed;
      left:0;
      top: 1rem;
      width: 7.5rem;
      height:auto;
      z-index: -1;
      filter:blur(5px)
  }
  .particulars{
    width: 3.5rem;
    height: 3rem;
    color: #ddd;
    margin-left: 2rem;
    // display: flex;
    // align-items: center;
    text-align: center;
    .heroname{
      width: 4rem;
      
    }
    .xiangqing{
      width: 1.3rem;
      margin-top: 0.5rem;
      margin-left: 1.1rem;
      border: 2px solid rgba(190,140,40,1);
      background-color: rgba(155,155,155,0.5);
      border-radius: 00.1rem;
    }
    .msgPopup{
      .msg{
        width: 6rem;
        height: 6rem;
        margin-left: 0.75rem;
        margin-top: 1rem;
        display: block;
        .skills{
          width: 6rem;
          .skill{
            width: 0.8rem;
            height: auto;
            margin-left: 00.4rem;
          }
        }
        .rate{
          margin-left: 00.5rem;
          margin-top: 1rem;
          span{
            margin-left: 1rem;
          }
        }
      }
    }
  }
}
</style>