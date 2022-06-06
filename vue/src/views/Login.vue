<template>
  <div class="login">
    <img class="bg" src="@/assets/img/RNG.jpg">
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yingxionglianmeng"></use>
      </svg>
    </div>
    <!-- <div class="title"><span>登录</span></div> -->
    <van-cell-group class="inputBox" inset>
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="password" label="密码" placeholder="请输入密码" />
    </van-cell-group>
    <div class="Button" @click="onLogin">
      <van-button 
        class="loginButton" round type="primary" 
        color="linear-gradient(to right, rgba(241, 188, 72, 0.8), rgba(247, 150, 76,0.8))"
      >
      登录
      </van-button>
    </div>
    <div class="zhuce" @click="$router.push('/register')">
      <span >没有账号？ 现在注册 ></span>
    </div>
  </div>
</template>


<script>
import store from '@/store/index.js'
import {reactive,toRefs,onMounted,ref} from 'vue'
import axios from "axios"
import router from "@/router/index.js"
import { Toast } from 'vant';

export default {
  setup() {
    const username = ref('');
    const password = ref('');

    const state = reactive({
      user:'',
    })

    const onLogin = () => {
      // console.log(username)
      // console.log(password)
      let loginMsg ={
        username:username.value,
        password:password.value
        // keyWord.value:输入的内容
      }
      console.log(loginMsg)
       axios({
        method:'get',
        url:'/user/login',
        params:loginMsg,
      }).then(res=>{
        store.commit('setUser',res.data)
        console.log(store.state.user)
        state.user=store.state.user
        // state.user = res.data
        // console.log(state.user)
        if(res.data){
          store.commit('setLogin')
          router.push('/me')
        }else{
          Toast("用户名或密码错误!")
        }
      })
      // $router.push('/me')
    }
    return { 
      username,
      password,
      ...toRefs(state),
      onLogin,
      };
  },
};
</script>


<style lang="less" scoped>
.login{
  height: 100%;
  width: 7.5rem;
  position: fixed;
  left: 0;
  top: 1rem;
  background-color: rgba(28,28,28,1);
  color: #fff;
  display: block;
  .bg{
      position: fixed;
      // left:0;
      // top: 3rem;
      width: 7.5rem;
      height: auto;
      z-index: -1;
      filter:blur(20px)
      // filter:brightness(80%);
  }
  .icon{
    width: 5.5rem;
    margin-left: 1rem;
    margin-top: 1.5rem;
    fill: rgba(255, 255, 255, 1);
  }
  .inputBox{
    margin-top: 1rem;
  }
  /deep/ .van-cell.van-field{
    background-color: rgba(255, 255, 255, 0.5);

  }
  /deep/.van-cell-group.van-cell-group--inset{
    background-color: rgba(255, 255, 255, 0.5);
  }
  /deep/.van-cell__title.van-field__label{
    color: #000;
  }
  .Button{
    margin-top: 1rem;
    margin-left: 1.5rem;
    .loginButton{
      width: 4.5rem;
    }
  }
  /deep/ .van-button.van-button--primary.van-button--normal.van-button--round.loginButton{
    background-color:rgba(241, 188, 72, 0.8) ;
    border:none;
  }
  .zhuce{
    margin-top: 0.5rem;
    margin-left: 2.5rem;
    font-size: 12px;
  }
}
</style>