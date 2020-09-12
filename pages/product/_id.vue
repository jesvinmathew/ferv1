<template>
  <div>
    <section class="breadcrumb_area text-center section_padding gray_bg">
      <ul class="breadcrumb">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li> {{ categoryData.details.name }}</li>
      </ul>
      <h1>{{ categoryData.details.name }}</h1>
    </section>
    <section class="latest_blog_area section_padding text-center">
      <div class="container">
        <b-row>
          <div
            v-for="(item,i) in categoryData.products"
            v-bind:key="i"
            class="col-md-3 col-sm-6 rounded">
            <div class="team_box">
              <div class="team_img">
                <b-img thumbnail fluid :src="imageLink+item.product_image[0].path" :alt="item.category.name" class="zoom"></b-img>
              </div><!--end .team_img-->
              <div class="">
                <p>{{item.sub_category.name}}</p>
              </div><!--end .team_details-->
            </div><!--end .team_box-->
          </div><!--end .col-md-3-->
        </b-row><!--end .row-->
      </div><!--end .container-->
    </section>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        categoryData: {
          details: {},
          products: {}
        },
        imageLink: process.env.fileLink + 'upload/Product/'
      }
    },
    head(){
      return {
        title: "Luxmill | Product"
      }
    },
    mounted() {
      this.getCategory()
    },
    methods: {
      async getCategory () {
        this.categoryData = await this.$axios.get('get-product-details/'+this.$route.params.id).then(res => res.data)
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
