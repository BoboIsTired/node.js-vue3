<template>
  <div class="heroList">
    
    <div class="search">
      <van-search 
        v-model="keyWord" 
        placeholder=""
        @update:model-value="onSearch"
      >
      </van-search>
    </div>

    <div class="list">
      <van-grid  direction="horizontal" :column-num="2" :gutter="10" clickable  :border=false>
        <van-grid-item  v-for="(value,index) in heroList" :key="index"  
          @click="$router.push({
            path:'/thehero',
            query:{
              id:index
            }
          })"
          >
          <img :src="value.headUrl" alt="">
          <div class="name">
            <span class="nikeName">{{value.nickname}}</span>
            <span class="realName">{{value.name}}</span>
          </div>
        </van-grid-item>
      </van-grid>
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
      // console.log(store.state.heroList)
      state.heroList=store.state.heroList
    });

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
}
</script>

<style lang="less" scoped>
.heroList{
  display: block;
  width: 6.8rem;
  margin-top: 2rem;
  margin-left: 0.35rem;
  height: 10.5rem;
  // overflow: scroll;

  .search{
    height: o.6rem;
    width: 3rem;
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
  .list{
    display: block;
    height: 11rem;
    overflow: scroll;
    img{
      height: auto;
      width: 1rem;
      border-radius: 00.5rem;
    }
    .name{
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      margin-left: 00.1rem;
      .realName{
        // display: flex;
        margin-top: 00.05rem;
        width: 1.2rem;
        font-size: 8px;
        color: #fff;
        display: block;
        text-align:center
      }
      .nikeName{
        width: 1.7rem;
        font-size: 14px;
        color: #fff;
        display: block;
        text-align:center
      }
    }

    /deep/ .van-grid{
      // background: #444;
      border-radius: 00.5rem;
    }
    /deep/ .van-grid-item__content{
      height: 1.5rem;
      width: 3rem;
      background: rgba(255, 255, 255, 0);
      // padding: 0.1rem 0.1rem;
      display: flex;
      border: 1px solid rgba(190,140,40,0);
      align-items: center;  //侧轴居中(横向居中)
    }
  }
}

</style>