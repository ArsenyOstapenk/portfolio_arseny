import Vue from "vue";
import { swiper, swiperSlide } from 'vue-awesome-swiper';

const buttons = {
   template: "#slider-buttons"
}  

new Vue({
   el: "#reviews-component",
   template: "#reviews-container",
   components: { buttons, swiper, swiperSlide },
   data() {
      return {
         reviews: [],
         swiperOption: {
            navigation: {
               nextEl: '.reviews-slider-btn__item--next',
               prevEl: '.reviews-slider-btn__item--prev'
            },
            loop: false,
            slidesPerView: 2,
            slidesPerGroup: 1,
         }
      };
   },
   methods: {
      arrwithRequiredImages(array) {
         return array.map(item => {
            const requiredPic = require(`../images/content/${item["author-pic"]}`);
            item["author-pic"] = requiredPic;

            return item;
         });
      }
   },
   created() {
      const reviews = require("../data/reviews.json");
      this.reviews = this.arrwithRequiredImages(reviews);
   }
});