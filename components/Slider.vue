<template>
  <section>
    <b-col cols="12" style="height:108px"></b-col>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      
      <!-- Text slides with image -->
      <b-carousel-slide 
        v-for="(item,i) in homeSliders"
        v-bind:key="i"
        :img-src="imageLink+item.path"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="header_slide_text">
                <p>{{item.title}}</p>
                <h1>{{item.description}}</h1>
                <a href="#" class="btn-orange">Book Online</a>
              </div><!--end .header_slide_text-->
            </div><!--end .col-md-7-->
          </div><!--end .row-->
        </div><!--end .container-->
      </b-carousel-slide>
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    </b-carousel>
  </section>
</template>

<script>
  export default {
    name: "Slider",
    data () {
      return {
        homeSliders: [],
        imageLink: process.env.fileLink + 'upload/HomeSlider/',
        slide: 0,
        sliding: null
      }
    },
    mounted() {
      this.getHomeSlider()
    },
    methods: {
      async getHomeSlider () {
        this.homeSliders = await this.$axios.get('getHomeSlider').then(res => res.data)
      },
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = true
      }
    }
  }
</script>

<style scoped>

</style>
