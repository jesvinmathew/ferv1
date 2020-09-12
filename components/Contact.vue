<template>
    <div>
      <div class="map_section">
        <!--<div id="map"></div>
-->
      </div>
      
      <!--end .map_section-->
      <!--end map section-->

      <!--start contact section -->
      <section class="contact_form_area contact_form_other_style section_padding">
        <div class="container">
          <div class="row">
            <div class="col-md-4 contact">
              <p>Fervent Tech Lighting netherlands B.V</p>
              <p>Zilverenberg 36</p>
              <p>Den Bosch</p>
              <p>Netherlands</p>
              <span class="support_email"><i class="fa fa-envelope"></i> <a href="mailto:technology@luxmill.nl">technology@luxmill.nl</a></span><br /><br />
              <span class="support_num"><i class="fa fa-phone-square"></i> <a href="">085 246 0297</a></span>
            </div>
            <div class="col-md-8">
              <div class="contact-details">
                <div class="hero-section-title">
                  <i class="icon-snowflake"></i>
                  <h4>CONTACT US</h4>
                  <h1>Get in touch with us</h1>
                </div>
                <form action="#" method="post">
                  <input type="text" name="name" class="input_mr input_half_width gray_bg" placeholder="Full name">
                  <input type="EMAIL" name="email" class="input_half_width gray_bg" placeholder="Your email">
                  <textarea class="gray_bg" name="content" id="textarea" cols="30" rows="10" placeholder="Write message"></textarea>
                  <button class="btn-orange" type="submit" value="Request a Quote Now">Send Message Now</button>
                </form>
              </div><!--end .contact-details-->
            </div><!--end .col-md-8-->
          </div><!--end .row-->
        </div><!--end .container-->
      </section><!--end .contact_form_area-->
    </div>
</template>

<script>
    export default {
      name: "Contact",
      mounted() {
        if($("#map").length) {
          initMap('map', 40.712776, -74.005974, '/assets/images/map-marker.png');
        }
      }
    }
</script>

<style scoped>

</style>
