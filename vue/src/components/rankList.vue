<template>
  
  <div class="rankList">

    <div class="search">
      <van-search 
        v-model="keyWord" 
        placeholder=""
        @update:model-value="onSearch"
      >
      </van-search>
    </div>
    
    <div class="top">
      <div class="paiMing">排名</div>
      <div class="yingXiong">英雄</div>
      <div class="shengLv">胜率</div>
      <div class="dengChang">登场率</div>
      <div class="tiDui">梯队</div>
    </div>

    <div class="list">
      <div
        :class="[(index+1)%2==0?'cellListD':'cellListS']" 
        v-for="(value,index) in heroList" :key="index" 
        :title="index"
        @click="$router.push({
          path:'/thehero',
          query:{
            id:index
          }
        })"
      >
        <!-- <router-link to="/thehero"></router-link> -->
        <div class="index">{{index+1}}</div>
        <img class="heroHead" :src="value.headUrl" alt="">
        <div class="heroName">{{value.nickname}}</div>
        <div class="winRate">{{value.winRate}}</div>
        <div class="inRate">{{value.inRate}}</div>
        <div v-if="index<=2">
          <img class="tier" src="@/assets/img/T00.png" alt="">
        </div>
        <div v-if="index<=9&&index>2">
          <img class="tier" src="@/assets/img/T01.png" alt="">
        </div>
        <div v-if="index>9">
          <img class="tier" src="@/assets/img/T02.png" alt="">
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'
import {reactive,toRefs,onMounted,ref} from 'vue'
import axios from "axios"

export default {

  setup() {
    const keyWord = ref('');
    const state = reactive({
      heroList:[],
    })


    onMounted(() => {
       axios({
        method:'get',
        url:'/hero',
        // params:searchWord,
      }).then(res=>{
        store.commit('setHero',res.data)
        store.commit('setSearch',res.data)
        console.log(store.state.heroList)
        state.heroList=store.state.heroList
      })
    })

    const onSearch = () => {
      console.log(keyWord)
      let searchWord ={
        keyWord:keyWord.value
        // keyWord.value:输入的内容
      }
      console.log(searchWord)
       axios({
        method:'get',
        url:'/hero/search',
        params:searchWord,
      }).then(res=>{
        store.commit('setSearch',res.data)
        console.log(store.state.searchList)
        state.heroList=store.state.searchList
      })
    }

    
    
    return {
      keyWord,
      ...toRefs(state),
      onSearch,
    }
  },
};


</script>

<style lang="less" scoped>
.rankList{
  width: 7.1rem;
  height: 11.5rem;
  margin-top: 1.8rem;
  margin-left: 0.2rem;
  .search{
    height: o.6rem;
    width: 3rem;
    margin-bottom: 0.2rem;
    .van-search{
      height: 0.5rem;
      background-color: rgba(0, 0, 0, 0);
    }
    /deep/.van-cell--borderless.van-field.van-search__field{
      background-color: rgba(0, 0, 0, 0);
    }
    /deep/.van-search__content{
      background-color: rgba(0, 0, 0, 0);
      padding: 0 0;
    }
    /deep/.van-field__control{
      background-color: #aaa;
      border-radius: 00.2rem;
    }
  }
  .top{
    height: 1rem;
    width: 7.1rem;
    background-color: rgba(60,60,60,1);
    // position: absolute;
    display: flex;
    // margin-top: 1rem;
    color: rgba(230,230,230,1);
    font-size: 12px;
    // padding: 0.3rem 0;
    align-items: center;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    
    .paiMing{
      margin-left: 0.3rem;
    }
    .yingXiong{
      margin-left: 0.4rem;
    }
    .shengLv{
      margin-left: 2.4rem;
    }
    .dengChang{
      // width: 2rem;
      margin-left: 0.7rem;
    }
    .tiDui{
      margin-left: 0.4rem;
    }
  }
  .list{
    // margin-top: 1rem;
    height: 10.5rem;
    overflow: scroll;
    .cellListD{
      background-color: rgba(41,41,41,1);
      height: 1.2rem;
      color: #fff;
      display: flex;
      // padding: 00.4rem 0;
      align-items: center;
      // justify-content: space-between;
      font-size: 12px;
    }
    // .cellListD:active{
    //     background-color: rgba(255,255,255,1);
    //   }
    .cellListS{
      height: 1.2rem;
      background-color: rgba(35,35,35,1);
      color: #fff;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      font-size: 12px;
    }
    .index{
      margin-left: 0.4rem;
      width: 00.5rem;
    }
    .heroHead{
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 00.4rem;
      margin-left: 00.1rem;
    }
    .heroName{
      width: 1.7rem;
      margin-left: 00.3rem;
      font-size: 14px;
    }
    .winRate{
      margin-left: 00.15rem;
    }
    .inRate{
      width: 0.7rem;
      margin-left: 00.55rem;
    }
    .tier{
      width: 00.4rem;
      height: auto;
      margin-left: 00.45rem;
    }
  }
  
  
}
</style>