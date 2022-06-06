<template>
  <div class="update">
    <svg class="iconBack" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-yiliaohangyedeICON-"></use>
    </svg>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhuce"></use>
      </svg>
    </div>
    <van-cell-group class="inputBox" inset>
      <van-field v-model="nickname" label="昵称" placeholder="昵称" />
      <van-field v-model="password1" label="原密码" placeholder="请输入原密码" />
      <van-field v-model="password2" label="新密码*" placeholder="请输入新密码" />
    </van-cell-group>
    <div class="Button" @click="onRegister">
      <van-button 
        class="loginButton" round type="primary" 
        color="linear-gradient(to right, rgba(241, 188, 72, 0.8), rgba(247, 150, 76,0.8))"
      >
      修改
      </van-button>
    </div>
  </div>
</template>


<script>
import {reactive,toRefs,ref, onMounted} from 'vue'
import axios from "axios"
import router from "@/router/index.js"
import { Toast } from 'vant';
import store from '@/store/index.js'

export default {
  setup() {
    const nickname = ref('');
    const password1 = ref('');
    const password2 = ref('');

    const state = reactive({
      user:'',
    })

    onMounted(() => {
      // console.log(store.state.heroList)
      state.user=store.state.user
    });

    const onRegister = () => {

      console.log(password1,password2,nickname)
      if(password1.value===state.user.password){
        //更新用户表
        axios({
          method:'post',
          url:'/user/update',
          data:{
            username:state.user.username,
            password:password2.value,
            userNickname:nickname.value
          }
        })

        //更新好友表
        axios({
          method:'post',
          url:'/myfriend/update',
          data:{
            // username:state.user.username,
            // password:password2.value,
            newNickname:nickname.value,
            userNickname:state.user.userNickname
          }
        })
        //更新好友申请表
        axios({
          method:'post',
          url:'/friend/update',
          data:{
            // username:state.user.username,
            // password:password2.value,
            newNickname:nickname.value,
            userNickname:state.user.userNickname
          }
        })

        router.push('/login')
        Toast("修改成功！")


      }else{
        Toast("原密码输入错误!")
      }
    }

    return { 
      nickname,
      password1,
      password2,
      ...toRefs(state),
      onRegister,
    };
  },
}
</script>

<style lang="less" scoped>
.update{
  // margin-top: 3rem;
  height: 100%;
  width: 7.5rem;
  position: fixed;
  left: 0;
  top: 1rem;
  background-color: rgba(28,28,28,1);
  color: #fff;
  display: block;
  .iconBack{
    width: 00.8rem;
    height: 00.5rem;
    position: fixed;
    margin-top: 0.7rem;
    margin-left: 0.5rem;
    border: 2px solid rgba(190,140,40,0.7);
    background-color: rgba(34,34,34,0.5);
  }
  .icon{
    fill: #fff;
    width: 1rem;
    margin-left: 3.25rem;
    margin-top: 1rem;
  }
  .inputBox{
    margin-top: 1rem;
  }
  /deep/ .van-cell.van-field{
    background-color: rgba(255, 255, 255, 0.5);

  }
  /deep/.van-cell-group.van-cell-group--inset{
    // background-color: rgba(255, 255, 255, 0.5);
  }
  .Button{
    margin-top: 2rem;
    margin-left: 1.5rem;
    .loginButton{
      width: 4.5rem;
    }
  }
}
</style>