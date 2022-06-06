<template>
  <div class="home">
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-yingxionglianmeng"></use>
    </svg> -->

    <rank-data></rank-data>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import rankData from '@/views/RankData.vue'

export default {
  name: 'HomeView',
  components: {
    // topNav,
    rankData,
  }
}
</script>

<style lang="less" scoped>
.home{
  // background-color: rgba(38,38,38,1);
}
.icon{
  position: absolute;
  top: 4rem;
  left: 1rem;
  fill: #aaa;
}
</style>
