<template>
  <div class="friends">

    <div class="notLogin" v-show="!isLogin">
      <img class="bg" src="@/assets/img/RNG.jpg" >
    </div>
    <div class="afterLogin" v-show="isLogin">

      <div class="search">
        <van-search 
          v-model="keyWord" 
          input-align="center"
        >
        
        </van-search>
        <svg class="icon" aria-hidden="true" @click="onSearch">
          <use xlink:href="#icon-jiahaoyou"></use>
        </svg>
      </div>

      <div class="applyList">
        <div class="applyTop">
          <span>好友申请</span>
        </div>
        <div class="apply" v-if="showFlag">
          <div class="apList" v-for="(value,index) in applyList" :key="index" >
            <div class="applyUser">{{value.host}}</div>
            <div class="right">
              <svg class="icon" aria-hidden="true" @click="onAgree(index)">
                <use xlink:href="#icon-tongyi"></use>
              </svg>
              <svg class="icon" aria-hidden="true" @click="onRefuse(index)">
                <use xlink:href="#icon-jujue"></use>
              </svg>
            </div>
            
          </div>

        </div>
      </div>

      <div class="applyList">
        <div class="applyTop">
          <span>好友</span>
        </div>
        <div class="apply" v-if="showFlag">
          <div class="apList" v-for="(value,index) in friendList" :key="index" >
            <img class="friendHead" :src="value.url" alt="">
            <div class="applyUser">{{value.host}}</div>
            <div class="right">


            </div>
            
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'
import {reactive,toRefs,onMounted,ref, onBeforeMount} from 'vue'
import axios from "axios"

export default {
  
  setup() {
    const isLogin = store.state.isLogin;
    let showFlag = true
    const keyWord = ref('');
    const state = reactive({
      applyList:[],
      friendList:[],
      friendPic:[],
    })

    onMounted(() => {
       state.applyList = store.state.applyList
      //  console.log(state.applyList)
       state.friendList = store.state.friendList
       
       //获取好友头像
       state.friendList.forEach(function(item,index){

        let friendNickname={
          friendNickname:state.friendList[index].host
        }

        axios({
          method:'get',
          url:'/user/url',
          // params:keyword,
          params:friendNickname
          
        }).then(res=>{
          // console.log(res);
          state.friendList[index].url=res.data.userHeadUrl
          //  console.log(state.friendList[index])
        })

       })
       state.applyList.forEach(function(item,index){

        let friendNickname={
          friendNickname:state.applyList[index].host
        }

        axios({
          method:'get',
          url:'/user/url',
          // params:keyword,
          params:friendNickname
          
        }).then(res=>{
          // console.log(res);
          state.applyList[index].url=res.data.userHeadUrl
           console.log(state.applyList[index])
        })

       })

       
    })
    //添加好友
    const onSearch = () => {
      console.log(keyWord)
      let msg ={
        host:store.state.user.userNickname,
        guest:keyWord.value,
        
        // keyWord.value:输入的内容
      }
      console.log(msg)
       axios({
        method:'get',
        url:'/friend/request',
        // params:keyword,
        params:msg
        
      }).then(res=>{
        console.log(res.data)
      })
    }
    //同意添加
    const onAgree=(index)=>{
      let msg1 = {
        id:state.applyList[index].id
      }
      let msg2 = {
        host:state.applyList[index].host,
        guest:store.state.user.userNickname
      }
      console.log(msg1)

      showFlag = false
      //修改好友申请表
      axios({
        method:'get',
        url:'/friend/agree',
        // params:keyword,
        params:msg1
        
      }).then(res=>{
        console.log(res.data)
        //更新好友界面
        state.friendList.splice(0,0,state.applyList[index])
        state.applyList.splice(index,1)
      })
      //添加好友关系表
      axios({
        method:'get',
        url:'/myfriend/add',
        // params:keyword,
        params:msg2
        
      }).then(res=>{
        console.log(res.data)
        showFlag = true
      })



    }
    //拒绝添加
    const onRefuse=(index)=>{
      let msg1 = {
        id:state.applyList[index].id
      }
      console.log(msg1)

      showFlag = false
      axios({
        method:'get',
        url:'/friend/refuse',
        // params:keyword,
        params:msg1
        
      }).then(res=>{
        console.log(res.data)
        // state.friendList.splice(0,0,state.applyList[index])
        state.applyList.splice(index,1)
        showFlag = true
      })

    }


    return {
      showFlag,
      isLogin,
      keyWord,
      onSearch,
      onAgree,
      onRefuse,
      ...toRefs(state),
    }
  },
}
</script>


<style lang="less" scoped>
.friends{
  height: 100%;
  width: 7.5rem;
  position: fixed;
  left: 0;
  top: 1rem;
  background-color: rgba(58,58,58,1);
  .afterLogin{
    width: 7.1rem;
    height: 10rem;
    margin-left: 0.2rem;;
    .applyList{
      width: 7.1rem;
      margin-top: 00.3rem;
      .applyTop{
        height: 0.7rem;
        width: 7.1rem;
        background-color: rgba(38,38,38,1);
        display: flex;
        align-items: center;
        // margin-top: 1rem;
        color: rgba(230,230,230,1);
        font-size: 14px;
        span{
          margin-left: 0.3rem;
        }
      }
      .apply{
        // width: 7.5rem;
        display:block ;
        // height: 3rem;
        .apList{
          display: flex;
          width: 7.1rem;
          height: 1.2rem;
          // justify-content: space-between; //两边布局 向两边靠
          align-items: center;  //侧轴居中(横向居中)
          color: #fff;
          background-color: rgba(48,48,48,1);
          .applyUser{
            width: 3rem;
            margin-left: 00.5rem;
          }
          .friendHead{
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 00.5rem;
            margin-left: 0.3rem;
          }
          .right{
            margin-left: 1.5rem;
          }
        }
        .apList:active{
          background-color: rgba(78,78,78,1);
        }
        .icon{
          width: 00.5rem;
          height: 0.5rem;
          margin-left: 00.2rem;
          fill: rgba(190,140,40,1);
        }
      }
    }
  }
  .bg{
    // margin-top: 1rem;
    width: 7.5rem;
    height: auto;
  }
  .search{
    height: 0.8rem;
    width: 3.6rem;
    margin-bottom: 0.2rem;
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    .icon{
      width: 00.6rem;
      height: 00.6rem;
      fill: rgba(190,140,40,1);;
    }
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
}
</style>