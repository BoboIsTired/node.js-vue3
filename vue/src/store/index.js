import { createStore } from 'vuex'

export default createStore({
  state: {
    heroList:[],
    searchList:[],
    applyList:[],
    friendList:[],
    user:'',
    isLogin:false,
  },
  getters: {
  },
  mutations: {
    setHero:function(state,value){
      state.heroList=value
    },
    setSearch:function(state,value){
      state.searchList=value
    },
    setUser:function(state,value){
      state.user=value
    },
    setLogin:function(state){
      state.isLogin=true
    },
    setApplyList:function(state,value){
      state.applyList = value
    },
    setFriendList:function(state,value){
      state.friendList = value
    }
    
    // setHeroIndex(state,value){
    //   // state.playCurrentIndex = value
    // },
  },
  actions: {
  },
  modules: {
  }
})
