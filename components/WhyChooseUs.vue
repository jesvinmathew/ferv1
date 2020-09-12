<template>
  <section class="why_choose_us_area section_padding text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="hero-section-title">
            <h2>WHY YOU SHOULD CHOOSE US</h2>
          </div><!--end .hero-section-title-->
        </div><!--end .col-md-12-->
      </div><!--end .row-->
      <b-row>
        <b-col
          v-for="(item,i) in certificate"
          v-bind:key="i"
        >
          <b-img thumbnail fluid :src="imageLink+item.path" class="why_choose_us_details"></b-img>
        </b-col>
      </b-row>
    </div><!--end .container-->
  </section>
</template>

<script>
  export default {
    name: "WhyChooseUs",
    data () {
      return {
        certificate: [],
        imageLink: process.env.fileLink + 'upload/Certificate/',
        slide: 0,
        sliding: null
      }
    },
    mounted() {
      this.getCertificate()
    },
    methods: {
      async getCertificate () {
        this.certificate = await this.$axios.get('getCertificate').then(res => res.data)
      }
    }
  }
</script>

<style scoped>

</style>
