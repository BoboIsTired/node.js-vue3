<template>
  <div class="iconListHero">
    <!-- <span class="title">英雄列表</span> -->
    <van-tabbar class="tabbar" v-model="active" active-color="rgba(190,140,40,1)" inactive-color="#aaa" :fixed=false :border=false>
      <van-tabbar-item  @click="isActive(1)">全部</van-tabbar-item>

      <van-tabbar-item  @click="isActive(2)">
          <svg :class="[activeNum==2?'iconActive':'icon']" aria-hidden="true">
            <use xlink:href="#icon-shanglu"></use>
          </svg>
      </van-tabbar-item>


      <van-tabbar-item  @click="isActive(3)">
        <svg :class="[activeNum==3?'iconActive':'icon']" aria-hidden="true">
          <use xlink:href="#icon-daye"></use>
        </svg>
      </van-tabbar-item>
      <van-tabbar-item @click="isActive(4)">
        <svg :class="[activeNum==4?'iconActive':'icon']" aria-hidden="true">
          <use xlink:href="#icon-a-1SVG"></use>
        </svg>
      </van-tabbar-item>
      <van-tabbar-item @click="isActive(5)">
        <svg :class="[activeNum==5?'iconActive':'icon']" aria-hidden="true">
          <use xlink:href="#icon-xialu"></use>
        </svg>
      </van-tabbar-item>
      <van-tabbar-item @click="isActive(6)">
        <svg :class="[activeNum==6?'iconActive':'icon']" aria-hidden="true">
          <use xlink:href="#icon-fuzhu"></use>
        </svg>
      </van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // const activeNum= 0;
    const active = ref(0);
    return { 
      active,
    };
  },
  data() {
    return {
      activeNum:0
    };

  },
  methods:{
    isActive(num){
      this.activeNum=num
      // console.log(this.activeNum)
    }
  }
};
</script>

<style lang="less" scoped>
.iconListHero{
  width: 7.5rem;
  height: 1rem;
  display: block;
  position: absolute;
  .tabbar{
    background-color: rgba(34,34,34,1);
    // border: 1px solid rgba(190,140,40,1);
    height: 0.5rem;
    width: 6rem;
    margin-top: 1rem;
    margin-left: 0.75rem;
    // border-radius: 00.1rem;
  }
  .icon{
    height: 00.3rem;
    width: 0.3rem;
    fill: #aaa;
    
  }
  .iconActive{
    height: 00.3rem;
    width: 0.3rem;
    fill: rgba(190,140,40,1);
  }
  .van-tabbar-item{
    border: 1px solid #666;
    border-radius: 00.1rem;
    // background-color: #000;
  }
  /deep/ .van-tabbar-item.van-tabbar-item--active{
    background:#555 ;
  }
}
</style>


