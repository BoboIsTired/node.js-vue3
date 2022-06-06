<template>
  <div>

    <router-view/>
    <bottom-nav></bottom-nav>
    <top-nav></top-nav>
    

  </div>
</template>

<script>
import topNav from '@/components/topNav.vue'
import bottomNav from '@/components/bottomNav.vue'


export default {

  components:{
    topNav,
    bottomNav,

  },
}
</script>

<style type="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
}
</style>
