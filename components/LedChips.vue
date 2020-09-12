<template>
  <section class="led_chups_area section_padding text-center">
    <div class="container">
      <b-row>
        <b-col cols="3">
          <i class="icon-snowflake" style="padding-top:50px"></i>
          <h1 style="padding-top:50px">Led Chips</h1>
        </b-col>
        <b-col cols="9">
          <b-row>
            <b-col 
              v-for="(items,i) in chips"
              v-bind:key="i"
              cols="3"
              style="padding:5px"
            >
              <b-img thumbnail fluid :src="imageLink+items.path" :alt="items.name"></b-img>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Slider",
    data () {
      return {
        chips: [],
        imageLink: process.env.fileLink + 'upload/LedChip/',
        slide: 0,
        sliding: null
      }
    },
    mounted() {
      this.getLedChips()
    },
    methods: {
      async getLedChips () {
        this.chips = await this.$axios.get('getLedChip').then(res => res.data)
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
  .chip{
    width: 300px;
  }
</style>
