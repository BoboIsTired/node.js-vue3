<template>
  <div class="register">
    <img class="bg" src="@/assets/img/RNG.jpg" >
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhuce"></use>
      </svg>
    </div>
    <van-cell-group class="inputBox" inset>
      <van-field v-model="nickname" label="昵称" placeholder="请输入昵称" />
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="password1" label="密码" placeholder="请输入密码" />
      <van-field v-model="password2" label="密码*" placeholder="请再次输入密码" />
    </van-cell-group>
    <div class="Button" @click="onRegister">
      <van-button 
        class="loginButton" round type="primary" 
        color="linear-gradient(to right, rgba(241, 188, 72, 1), rgba(247, 150, 76,1))"
      >
      注册
      </van-button>
    </div>
  </div>
</template>


<script>
import {reactive,toRefs,ref} from 'vue'
import axios from "axios"
import router from "@/router/index.js"
import { Toast } from 'vant';

export default {
  setup() {
    const nickname = ref('');
    const username = ref('');
    const password1 = ref('');
    const password2 = ref('');

    const state = reactive({
      user:'',
    })

    const onRegister = () => {
      // console.log(username)
      // console.log(password)
      // let loginMsg ={
      //   username:username.value,
      //   password:password.value
        // keyWord.value:输入的内容
      // }
      console.log(username,password1,password2,nickname)
      if(password1.value===password2.value){
        axios({
          method:'post',
          url:'/user',
          data:{
            username:username.value,
            password:password1.value,
            userNickname:nickname.value
          }
        })

        router.push('/login')
        Toast("注册成功！")


      }else{
        Toast("请检查输入内容!")
      }

    }

    return { 
      nickname,
      username,
      password1,
      password2,
      ...toRefs(state),
      onRegister,
    };
  },
}
</script>

<style lang="less" scoped>
.register{
  .bg{
    position: absolute;
    width: 7.5rem;
    height: auto;
    filter:blur(20px);
    z-index: -1;
  }
  // margin-top: 3rem;
  height: 100%;
  width: 7.5rem;
  position: fixed;
  left: 0;
  top: 1rem;
  background-color: rgba(28,28,28,1);
  color: #fff;
  display: block;
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
    background-color: rgba(255, 255, 255, 1);

  }
  /deep/.van-cell-group.van-cell-group--inset{
    background-color: rgba(255, 255, 255, 1);
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