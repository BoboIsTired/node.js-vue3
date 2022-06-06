<template>
  <div class="rankData">
    <img class="bg" src="@/assets/img/bgRank.png" >
    <!-- <search></search> -->
    <icon-list-hero></icon-list-hero>
    <rank-list></rank-list>
    <!-- <hero-list></hero-list> -->
  </div>
</template>

<script>

import iconListHero from '@/components/iconListHero.vue'
// import heroList from '@/components/heroList.vue'
import rankList from '@/components/rankList.vue'
import search from '@/components/search.vue'


export default {
  components:{
    iconListHero,
    rankList,
    search,
  }
}
</script>


<style lang="less" scoped>
.rankData{
  height: 100%;
  width: 7.5rem;
  position: fixed;
  left: 0;
  top: 1rem;
  background-color: rgba(38,38,38,1);
  .bg{
      position: fixed;
      left:0;
      top: 0;
      width: 7.5rem;
      height:auto;
      z-index: -1;
      // filter:blur(40px)
  }
}
</style>