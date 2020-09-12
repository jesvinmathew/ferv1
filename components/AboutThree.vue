<template>
  <section class="about_repair_style_2 repair_area section_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="repair_details">
            <div class="hero-section-title">
              <i class="icon-snowflake"></i>
              <h1>WHY YOU SHOULD TRUST US?</h1>
            </div><!--end .hero-section-title-->
            <p>Our Luminaires are designed by using highest efficacy LED Light Sources: NICHIA, CITIZEN,
SHARP from JAPAN, OSRAM - GERMANY, BRIDGELUX &amp; CREE - USA, PHILIPS - HOLLAND,
SAMSUNG- KOREA and which is powered by Durable and High Performance LED Drivers:
TRIDONIC - AUSTRIA, MEANWELL - TAIWAN, PHILIPS - HOLLAND, OSRAM – GERMANY,
INVENTRONICS etc. along with high heat dissipation “Die-casting Aluminum forging
technology “ which secures durability and stability.</p>
            <a class="btn-orange" href="#">Contact Us</a>
          </div><!--end .repair_details-->
        </div><!--end .col-md-6-->
        <div class="col-md-6">
          <div class="repair_details_right text-right">
            <img src="/assets/images/about.jpg" alt="about image">
            <a href="#videostore" class="video-img"
               data-video="https://www.youtube.com/embed/A7ZkZazfvao" title="Play Icon" id="videolink">
              <i class="fa fa-play"></i>
            </a>
            <div id="videostore" class="mfp-hide text-center">
              <iframe src="https://www.youtube.com/embed/A7ZkZazfvao" allow="autoplay;encrypted-media" allowfullscreen></iframe>
            </div><!--end #videostore-->
          </div><!--end .repair_details_right-->
        </div><!--end .col-md-6-->
      </div><!--end .row-->
    </div><!--end .container-->
  </section>
</template>

<script>
    export default {
      name: "AboutThree",
      mounted() {
        $("#videolink").magnificPopup({
          type: 'inline',
          midClick: true
        });
      }
    }
</script>

<style scoped>

</style>
