<template>
  <div class="upload">
    <van-uploader :after-read='onRead' v-model='imgs' multiple :max-count='1'>
     <img :src="user.userHeadUrl" alt="">
   </van-uploader>

  </div>
  
</template>

<script>
import store from '@/store/index.js'
import {reactive,toRefs,onMounted,ref } from 'vue'
import axios from "axios"
  export default {
    setup(){
      const state = reactive({
        user:'',
        imgs:[],
        // imgUrl : 'http://game.gtimg.cn/images/lol/v2/personal/avatar/default.png'
      })

      onMounted(() => {
        // console.log(store.state.heroList)
        state.user=store.state.user

      });

      const onRead = (file) => {
          console.log(file)
          let formData = new FormData()
          formData.append('avatar', file.file)
          formData.append('username',state.user.username)
          console.log(formData.get("avatar"))

          // axios.post('/user/upload', formData)
          console.log(state.user.username)
          
          axios.post('/user/upload',formData).then(res=>{
            console.log(res)
          })
        }


      return {
      ...toRefs(state),
      onRead,
      }
    },
 
  }
</script>

<style lang="less" scope>
.upload{
  background-color: #666;
  height: 10rem;
  .van-uploader{
    margin-top: 2rem;
    margin-left: 2rem;
  }
}
</style>