<template>
  <section class="led_driver_area section_padding text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="about-header">
            <i class="icon-snowflake"></i>
            <h1>Led Drivers</h1>
          </div><!--end .hero-section-title-->
        </div><!--end .col-md-12-->
      </div><!--end .row-->
      <b-row>
        <b-col 
          v-for="(items,i) in drivers"
          v-bind:key="i"
        >
          <b-img thumbnail fluid :src="imageLink+items.path" alt="Image 1"></b-img>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
  export default {
    name: "LedDriver",
    data () {
      return {
        drivers: [],
        imageLink: process.env.fileLink + 'upload/LedDriver/'
      }
    },
    mounted() {
      this.getLedDriver()
    },
    methods: {
      async getLedDriver () {
        this.drivers = await this.$axios.get('getLedDriver').then(res => res.data)
      }
    }
  }
</script>

<style scoped>
  .chip{
    width: 300px;
  }
</style>
