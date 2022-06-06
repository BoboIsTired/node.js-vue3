<template>
  <div class="me">

    <img class="bg1" src="@/assets/img/meBg1.png" alt="">
    <img class="bg2" src="@/assets/img/meBg2.png" alt="">

    <div class="meTop">
      <div class="nickname">{{user.userNickname}}
        <svg class="icon" aria-hidden="true"  @click="$router.push('/update')">
          <use xlink:href="#icon-xiugaixinxi1"></use>
        </svg>
        
      </div>


      
      <img class="userHead" :src="user.userHeadUrl" alt=""  @click="$router.push('/upload')">
    </div>
    <div class="accountMsg">
      <div class="msgTop">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenlei-yingxionglianmeng"></use>
        </svg>
        <span>英雄联盟</span>
      </div>
      <div class="msgDetail">
        <img class="accountHead" :src="user.accountHeadUrl" alt="">
        <span class="accountName">{{user.accountName}}</span>
        <span class="accountLevel">{{user.accountLevel}}</span>
      </div>
      <div class="msgTitle">
        <span class="gameCount">总局数</span>
        <span class="winRate">胜率</span>
        <span class="KDA">KDA</span>
      </div>
      <div class="msgGame">
        <span class="gameCount">{{user.gamesCount}}</span>
        <span class="winRate">{{user.accountWinRate}}</span>
        <span class="KDA">{{user.KDA}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'
import {reactive,toRefs,onMounted,ref } from 'vue'
import axios from "axios"


export default {



  
  setup() {

    // const  imgUrl = 'http://game.gtimg.cn/images/lol/v2/personal/avatar/default.png',

    const state = reactive({
      user:'',
      // imgUrl : 'http://game.gtimg.cn/images/lol/v2/personal/avatar/default.png'
    })


    



    onMounted(() => {
      // console.log(store.state.heroList)
      state.user=store.state.user
      let msg={
        userNickname:state.user.userNickname
      }
      //获取好友申请
      axios({
        method:'get',
        url:'/friend/apply',
        params:msg

      }).then(res=>{
        store.commit('setApplyList',res.data)
        // store.commit('setSearch',res.data)
        console.log(store.state.applyList)
        // state.heroList=store.state.heroList
      })
      //获取好友
      axios({
        method:'get',
        url:'/myfriend',
        params:msg

      }).then(res=>{
        store.commit('setFriendList',res.data)
        // store.commit('setSearch',res.data)
        console.log(store.state.friendList)
        // state.heroList=store.state.heroList
      })

    });


    return {
      ...toRefs(state),
    }
  },
}
</script>


<style lang="less" scoped>
.me{
  height: 100%;
  width: 7.5rem;
  position: fixed;
  left: 0;
  top: 1rem;
  background-color: rgba(28,28,28,1);
  color: #fff;
  display: block;
  // align-content: center;
  .bg1{
    position: absolute;
    top: 0;
    z-index: -1;
    height: 7rem;
    width: 6rem;
    filter:brightness(60%);
  }
  .bg2{
    position: absolute;
    top: 0;
    z-index: -2;
  }
  .meTop{
    width: 7.5rem;
    height: 3rem;
    display: flex;
    margin-top: 1rem;
    // justify-content: space-between; //两边布局 向两边靠
    align-items: center;  //侧轴居中(横向居中)
    .nickname{
      width: 4rem;
      height: 1rem;
      margin-left: 1rem;
      font-size: 17px;
      .icon{
        width: 0.3rem;
        height: 0.3rem;
        // z-index: 10;
        fill: #fff;
        margin-left: 0.1rem;
        // margin-top: 0.2r;
      }
    }
    .userHead{
      width: 2rem;
      height: 2rem;
      border-radius: 1rem;
      border: 10px solid #000;
      // margin-left: 1rem;
    }
  }
  .accountMsg{
    width: 7rem;
    background-color: #666;
    margin-left: 0.25rem;
    border-radius: 0.2rem;
    .msgTop{
      height: 0.8rem;
      width: 7rem;
      // margin-left: 0.25rem;
      margin-top: 00.5rem;
      display: flex;
      align-items: center;  //侧轴居中(横向居中)
      background-color: rgba(190,140,40,0.8);
      border-top-left-radius: 00.2rem;
      border-top-right-radius: 00.2rem;
      .icon{
        width: 0.5rem;
        margin-left: 00.1rem;
      }
      span{
        font-size: 12px;
        margin-left: 0.3rem;
      }
    }
    .msgDetail{
      height: 2rem;
      width: 7rem;
      margin-left: 0.25rem;
      display: flex;
      align-items: center;  //侧轴居中(横向居中)
      .accountHead{
        width: 1.5rem;
        height: auto;
      }
      .accountName{
        font-weight: 600;
        width: 4rem;
      }
      .accountLevel{
        // margin-left: 1.5rem;
        font-size: 17px;
      }
    }
    .msgGame{
      height: 1rem;
      width: 7rem;
      // margin-left: 0.25rem;
      display: flex;
      justify-content: space-between; //两边布局 向两边靠
      align-items: center;  //侧轴居中(横向居中)
       padding: 0 0.5rem ;
    }
    .msgTitle{
      height: 0.5rem;
      width: 7rem;
      // margin-left: 0.25rem;
      display: flex;
      justify-content: space-between; //两边布局 向两边靠
      align-items: center;  //侧轴居中(横向居中)
      padding: 0 0.5rem ;
      font-size: 12px;
    }
  }


  
}
</style>