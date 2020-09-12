<template>
  <section class="team_section_area section_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="hero-section-title text-center">
            <i class="icon-snowflake"></i>
            <h1>Key Products</h1>
          </div><!--end .hero_section_title-->
        </div><!--end .col-md-12-->
      </div><!--end .row-->
      <b-row class="gutter-isotope-item">
        <div
          v-for="(item,i) in products"
          v-bind:key="i"
          class="col-md-3 col-sm-6">
          <div class="team_box">
            <div class="team_img">
              <b-img thumbnail fluid :src="imageLink+item.product_image[0].path" :alt="item.category.name" class="zoom"></b-img>
            </div><!--end .team_img-->
            <div class="team_details text-center">
              <span>{{item.sub_category.name}}</span>
            </div><!--end .team_details-->
          </div><!--end .team_box-->
        </div><!--end .col-md-3-->
      </b-row><!--end .row-->
    </div><!--end .container-->
  </section>
</template>

<script>
  export default {
    name: "FeaturedProducts",
    data () {
      return {
        products: [],
        imageLink: process.env.fileLink + 'upload/Product/'
      }
    },
    mounted() {
      this.getHomeSlider()
    },
    methods: {
      async getHomeSlider () {
        this.products = await this.$axios.get('get-feature-product').then(res => res.data)
      }
    }
  }
</script>

<style scoped>
  .zoom {
    transition: transform .2s; /* Animation */
  }

  .zoom:hover {
    transform: scale(1.2); /* (150% zoom)*/
  }
</style>
