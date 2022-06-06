<template>
  <div class="topNav">
    <div class="topLeft">

      <div is-link @click="showPopup">
        <svg class="iconMulu" aria-hidden="true">
          <use xlink:href="#icon-list"></use>
        </svg>
      </div>
      <van-popup 
        class="thePopup"
        :show="show" 
        position="left" 
        :style="{ height: '100%',width: '5rem' ,background:'rgba(38,38,38,1)'}"
        round
      >

        <img class="popupBackground" src="@/assets/img/jinx-Background.png">
        <img class="logo" src="@/assets/img/bigLogo.png" @click="close">
        
        <van-cell-group class="cellGroup"  >
          <van-cell  title="峡谷排位" is-link to="/rankdata" @click="close">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhandou"></use>
            </svg>
          </van-cell>

          <van-cell  title="英雄列表" is-link to="/herodata" @click="close">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-heroMenu"></use>
            </svg>
          </van-cell>

          <van-cell  title="装备列表" is-link to="/weapondata" @click="close">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wuqiku"></use>
            </svg>
          </van-cell>
        </van-cell-group>

      </van-popup>


      <!-- title -->
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenlei-yingxionglianmeng"></use>
      </svg>
      <span class="title">资料站</span>
    </div>

    <div class="topRight">
      <!-- <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yonghu2"></use>
      </svg> -->
    </div>


  </div>
</template>

<script>
import { ref } from 'vue';
export default {
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
      close,
      showPopup,
    };
  },
}
</script>


<style lang="less" scoped>
.topNav{
    padding:0 0.2rem;
    width: 7.5rem;
    height: 1rem;
    position: fixed;
    left: 0;
    top: 0;
    display: flex; //水平布局
    justify-content: space-between; //两边布局 向两边靠
    align-items: center;  //侧轴居中(横向居中)
    background-color: rgba(38,38,38,1);
    color: rgba(190,140,40,1);
    // position: relative;
    .topLeft{
      width: 3rem;
      height: 1rem;
      display: flex;
      align-items: center; 
      .iconMulu{
        width: 0.4rem;
        height: 0.4rem;
        fill: rgba(190,140,40,1);
      }
      .icon{
        margin-left: 00.4rem;
        width: 0.5rem;
        height: 0.5rem;
        fill: rgba(190,140,40,1);
      }
      span{
        margin-left: 0.1rem;
      }
      .thePopup{
        background-color: black;
        .logo{
          width: 2rem;
          height: 2rem;
          margin-left: 1.5rem;
          margin-top: 1.5rem;
          position: absolute;
        }
        .popupBackground{
          height: 100%;
          width: 100%;
          position: absolute;
          z-index: -1;
        }
        .cellGroup{
          margin-top: 4rem;
          background: rgba(255, 255, 255, 0.1);
          .van-cell{
            background: rgba(0, 0, 0, 0.3);
            color: rgba(190,140,40,1);
          }
          
        }

      }
    }
    .topRight{
      .icon{
        margin-left: 00.2rem;
        width: 0.5rem;
        height: 0.5rem;
        fill: rgba(190,140,40,1);
      }
    }
}
</style>