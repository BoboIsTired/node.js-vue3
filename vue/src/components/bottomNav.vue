<template>
  <div class="bottomNav">
    <!-- <span class="title">底部组件</span> -->
    <van-tabbar class="tabbar" v-model="active" active-color="rgba(190,140,40,1)" inactive-color="#aaa" :fixed=false :border=false>
      <van-tabbar-item replace to="/" @click="isActive(1)">
        <svg :class="[activeNum==1?'iconActive':'icon']" aria-hidden="true">
          <use xlink:href="#icon-gonglve-2"></use>
        </svg>
        <div class="tabTittle">资料</div>
      </van-tabbar-item>

      <van-tabbar-item  replace to="/friend" @click="isActive(2)">
          <svg  :class="[activeNum==2?'iconActive':'icon']" aria-hidden="true">
            <use xlink:href="#icon-lishibanben_icon"></use>
          </svg>
          <div class="tabTittle">好友</div>

      </van-tabbar-item>
      <van-tabbar-item replace to="/story"  @click="isActive(3)">
        <svg :class="[activeNum==3?'iconActive':'icon']" aria-hidden="true">
          <use xlink:href="#icon-yuzhoutansuo"></use>
        </svg>
        <div class="tabTittle">宇宙</div>
      </van-tabbar-item>
      <van-tabbar-item replace to="/me" @click="isActive(4)">
        <svg :class="[activeNum==4?'iconActive':'icon']" aria-hidden="true">
          <use xlink:href="#icon-yonghu2"></use>
        </svg>
        <div class="tabTittle">我的</div>
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
.bottomNav{

  position: absolute;
  bottom: 0;
  .tabbar{
    background-color: rgba(34,34,34,1);
    // border: 1px solid rgba(190,140,40,1);
    height: 1rem;
    width: 7.5rem;

  }
  .icon{
    height: 00.45rem;
    width: 0.45rem;
    fill: #aaa;
    // margin-left: 0.17rem;
    // margin-bottom: 00.1rem;
    
  }
  .iconActive{
    // position: absolute;
    // top: 0.1rem;
    height: 00.45rem;
    width: 0.45rem;
    fill: rgba(190,140,40,1);
  }

  /deep/ .van-tabbar-item.van-tabbar-item--active{
    background:#555 ;
  }
  // /deep/ .van-tabbar-item{
  //   // display: block;
  // }
}
</style>


