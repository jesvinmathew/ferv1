<template>
  <section class="contact_form_area section_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6">
          <img class="contact_img" src="/assets/images/contact_img.png" alt="contact img">
        </div>
        <div class="col-md-6 col-sm-6">
          <div class="contact-details">
            <div class="about-hader">
              <h4>Contact Us</h4>
            </div><!--end .hero-section-title-->
            <form action="#" method="post">
              <input class="gray_bg input_half_width input_mr" type="text" name="name" placeholder="Full name">
              <input class="gray_bg input_half_width" type="EMAIL" name="email" placeholder="Your email">
              <input class="gray_bg input_half_width input_mr" type="tel" name="tel" placeholder="Phone">
              <input class="gray_bg input_half_width" type="text" name="zipcode" placeholder="Zip code">
           
              <textarea class="gray_bg " name="content" id="textarea" cols="30" rows="10" placeholder="Write message"></textarea>
              <button class="btn-orange" type="submit" value="Request a Quote Now">Contact Now</button>
            </form>
          </div><!--end .contact_details-->
        </div><!--end .col-md-6-->
      </div><!--end .row-->
    </div><!--end .container-->
  </section>
</template>

<script>
    export default {
      name: "ContactHome"
    }
</script>

<style scoped>

</style>
