<template>
  <div class="heroData">
    <img class="bg" src="@/assets/img/background.png" >
    <div class="kongBai"></div>
    <icon-list-hero></icon-list-hero>
    <hero-list></hero-list>
  </div>
</template>

<script>

// import iconList from '@/components/iconList-vue.vue'
import heroList from '@/components/heroList.vue'
import iconListHero from '@/components/iconListHero.vue'

export default {
  components:{
    // iconList,
    heroList,
    iconListHero

  }
}
</script>


<style lang="less" scoped>
.heroData{
  height: 100%;
  width: 7.5rem;
  position: fixed;
  left: 0;
  top: 1rem;
  background-color: rgba(38,38,38,1);
  .kongBai{
    height: 0.2rem;
  }
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