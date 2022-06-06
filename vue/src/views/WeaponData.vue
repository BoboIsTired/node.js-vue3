<template>
  <div class="weaponData">
    <img class="bg" src="@/assets/img/background.png" >
    <icon-list></icon-list>
    <!-- <hero-list></hero-list> -->
  </div>
</template>

<script>

import iconList from '@/components/iconList1.vue'
// import heroList from '@/components/heroList.vue'


export default {
  components:{
    iconList,

  }
}
</script>


<style lang="less" scoped>
.weaponData{
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