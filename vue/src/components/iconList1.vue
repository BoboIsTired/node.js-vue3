<template>
  <div class="iconList1">
    <!-- <span class="title">峡谷排位</span> -->
    <div class="icons">

      <div class="iconItem-all" >
          <span >全部位置</span>
      </div>
      <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shanglu"></use>
          </svg>
          <span> 上路</span>
      </div>
      <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-daye"></use>
          </svg>
          <span> 打野</span>
      </div>
      <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-a-1SVG"></use>
          </svg>
          <span> 中路</span>
      </div>
      <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xialu"></use>
          </svg>
          <span> 下路</span>
      </div>
      <div class="iconItem">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fuzhu"></use>
          </svg>
          <span> 辅助</span>
      </div>

    </div>
  </div>
</template>


<script>

export default{
  methods : {
      clickDiv() {
          alert("div");
      },
  },
}
</script>


<style lang="less" scoped>
.iconList1{
  width: 7.5rem;
  height: 1rem;
  display: block;
  position: absolute;
  // left: 50%;
  .icons{
    width: 7.2rem;
    height: 0.5rem;
    display: flex;
    margin-left: 0.15rem;
    margin-top: 1.3rem;
    .iconItem{
      height: 00.5rem;
      width: 1.2rem;
      color: #fff;
      border: 1px solid #666;
      background-color: rgba(34,34,34,1);
      display: flex;
      padding: 00.1rem;
      justify-content: space-between; //两边布局 向两边靠
      align-items: center;  //侧轴居中(横向居中)
      font-size: 00.1rem;
      span{
        color: rgba(190,140,40,1);
      }
      
    }
    .iconItem-all{
      height: 00.5rem;
      width: 1.2rem;
      color: #fff;
      border: 2px solid rgba(190,140,40,1);
      background-color: rgba(34,34,34,1);
      display: flex;
      padding: 00.1rem;
      justify-content: space-between; //两边布局 向两边靠
      align-items: center;  //侧轴居中(横向居中)
      font-size: 00.1rem;
      span{
        color: rgba(190,140,40,1);
      }
      
    }
    .icon{
      width: 00.3rem;
      height: 00.3rem;
      fill: rgba(190,140,40,1);
    }
  }
}
</style>