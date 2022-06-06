<template>
  <div class="search">
    
    <van-search 
      v-model="keyWord" 
      placeholder="请输入搜索关键词"
      @search="onSearch"

    >
    </van-search>
  </div>
</template>

<script>
import store from '@/store/index.js'
import {reactive,toRefs,ref} from 'vue'
import axios from "axios"

export default {

  setup() {
    const keyWord = ref('');
    // return { value };
    const state = reactive({
      searchList:[],
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
        state.searchList=res.data
      })

      // this.show = true
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
.search{
  // width: 3rem;
  position: absolute;
  z-index: 10;
  left: 3rem;
  display: flex;
  /deep/.van-search{
    height: 00.7rem;
  }
}
</style>