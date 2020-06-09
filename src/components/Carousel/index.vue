<template>
  <div class="swiper-container" ref="Swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
            <img :src="item.imgUrl" />
        </div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Carousel',
  // 接收声明属性数据
  props:{
    carouselList:Array,//轮播图数组
    autoplay:Boolean
  },


   // 初始界面显示之后执行
  mounted() {
    // console.log('++++', this.carouselList.length)
    if(this.carouselList.length>0){
      this.initSwiper()
    }
  },

watch: {
  //  监视carouselList的回调函数==>当carouselList发生改变
  //  carouselList(value){
  //   //  利用 nexTick()延迟到界面更新之后才去创建swiper对象
  //    this.$nextTick(()=>{
  //      this.initSwiper()
  //    })
  //  }

  carouselList:{
    handler(value){
      if(this.carouselList.length===0) return
       this.$nextTick(()=>{
       this.initSwiper()
     })
    },
    // immediate:true,//初始显示就会调用第一次
  },


 },
  // mounted() {
  //   // // 初始化显示界面后立即执行
  //   // mounted() {
  //   //   setTimeout(() => {
  //   //     //  new Swiper ('.swiper-container', {
  //   //    new Swiper (this.$refs.Swiper, {
  //   //   // direction: 'vertical', // 垂直切换选项
  //   //   loop: true, // 循环模式选项

  //   //   autoplay:true,//实现自动轮播

  //   //   // 如果需要分页器
  //   //   pagination: {
  //   //     el: '.swiper-pagination',
  //   //   },

  //   //   // 如果需要前进后退按钮
  //   //   navigation: {
  //   //     nextEl: '.swiper-button-next',
  //   //     prevEl: '.swiper-button-prev',
  //   //   },

  //   // })
  //   //   }, 1000);
  //   // },
  // },
  methods: {
  initSwiper(){
     new Swiper (this.$refs.Swiper, {
    // direction: 'vertical', // 垂直切换选项,默认值
    loop: true, // 循环模式选项

    autoplay:this.autoplay,//实现自动轮播

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })
    }
  }
 }
</script>

<style lang="less" scoped>

</style>
