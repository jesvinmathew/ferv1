<template>
  <section class="testimonial_area section_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="hero-section-title text-center">
            <h1>TESTIMONIALS</h1>
          </div><!--end .hero-section-title-->
        </div><!--end .col-md-12-->
        <div class="col-md-10 col-md-offset-1">
          <div class="testimonial_image text-center">
          </div><!--end .testimonial_image-->
          <div class="testimonial_slider owl-carousel text-center">
            <div class="testimonial_details">
              <div class="row">
                <div class="col-md-5">
                  <img src="/assets/images/Portfolio/1598428799.gif" alt="blog img">
                </div>
                <div class="col-md-7">
                  <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
                  <span class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i></span>
                  <h3>John Smith<span class="skills"> / Founder Novio</span></h3>
                </div>
              </div>
            </div>
            <div class="testimonial_details">
              <div class="row">
                <div class="col-md-7">
                  <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
                  <span class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i></span>
                  <h3>John Smith<span class="skills"> / Founder Novio</span></h3>
                </div>
                <div class="col-md-5">
                  <img src="/assets/images/Portfolio/1598428921.gif" alt="blog img">
                </div>
              </div>
            </div><!--end  .testimonial_details-->
            <div class="testimonial_details">
              <div class="row">
                <div class="col-md-5">
                  <img src="/assets/images/Portfolio/1598429000.gif" alt="blog img">
                </div>
                <div class="col-md-7">
                  <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
                  <span class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i></span>
                  <h3>John Smith<span class="skills"> / Founder Novio</span></h3>
                </div>
              </div>
            </div><!--end .testimonial_details-->
            <div class="testimonial_details">
              <div class="row">
                <div class="col-md-7">
                  <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
                  <span class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i></span>
                  <h3>John Smith<span class="skills"> / Founder Novio</span></h3>
                </div>
                <div class="col-md-5">
                  <img src="/assets/images/Portfolio/1598429188.png" alt="blog img">
                </div>
              </div>
            </div><!--end .testimonial_details-->
            <div class="testimonial_details">
              <div class="row">
                <div class="col-md-5">
                  <img src="/assets/images/Portfolio/1598431305.gif" alt="blog img">
                </div>
                <div class="col-md-7">
                  <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
                  <span class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i></span>
                  <h3>John Smith<span class="skills"> / Founder Novio</span></h3>
                </div>
              </div>
            </div><!--end .testimonial_details-->
            <div class="testimonial_details">
              <div class="row">
                <div class="col-md-7">
                  <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
                  <span class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i></span>
                  <h3>John Smith<span class="skills"> / Founder Novio</span></h3>
                </div>
                <div class="col-md-5">
                  <img src="/assets/images/Portfolio/1598431328.gif" alt="blog img">
                </div>
              </div>
            </div><!--end .testimonial_details-->
          </div><!--end .testimonial_slider-->
        </div><!--end .col-md-8-->
      </div><!--end .row-->
    </div><!--end .container-->
  </section>
</template>

<script>
    export default {
      name: "Testimonial",
      mounted() {
        $(document).on('click','#custom_owl_carousel_dots > li', function(){
          $('#custom_owl_carousel_dots > li.active').removeClass('active');
          $(this).addClass('active');
        });
        let Owl = {
          init: function() {
            Owl.carousel();
          },
          carousel: function() {
            let owl;
            owl = $('.testimonial_slider').owlCarousel({
              items      : 1,
              dots       : true,
              center     : true,
              autoplay   : true,
              addClassActive : true,
              nav        : false,
              loop       : true,
              margin     : 10,
              animateOut : 'slideOutDown',
              animateIn : 'slideInDown'
            });

            $('#custom_owl_carousel_dots').on('click', 'li', function(e) {
              owl.trigger('to.owl.carousel', [$(this).index(), 300]);
            });
          }
        };
        Owl.init();


        let testimonial_slider = $(".testimonial_slider");
        testimonial_slider.on('changed.owl.carousel', function (e) {
          if(e.relatedTarget.current()===2) {
            $('#custom_owl_carousel_dots > li.testimonial1').addClass('active');
          } else {
            $('#custom_owl_carousel_dots > li.testimonial1').removeClass('active');
          }
          if(e.relatedTarget.current()===3) {
            $('#custom_owl_carousel_dots > li.testimonial2').addClass('active');
          } else {
            $('#custom_owl_carousel_dots > li.testimonial2').removeClass('active');
          }
          if(e.relatedTarget.current()===4) {
            $('#custom_owl_carousel_dots > li.testimonial3').addClass('active');
          } else {
            $('#custom_owl_carousel_dots > li.testimonial3').removeClass('active');
          }
          if(e.relatedTarget.current()===5) {
            $('#custom_owl_carousel_dots > li.testimonial4').addClass('active');
          } else {
            $('#custom_owl_carousel_dots > li.testimonial4').removeClass('active');
          }
          if(e.relatedTarget.current()===6) {
            $('#custom_owl_carousel_dots > li.testimonial5').addClass('active');
          } else {
            $('#custom_owl_carousel_dots > li.testimonial5').removeClass('active');
          }
          if(e.relatedTarget.current()===7) {
            $('#custom_owl_carousel_dots > li.testimonial6').addClass('active');
          } else {
            $('#custom_owl_carousel_dots > li.testimonial6').removeClass('active');
          }
        });
      }
    }
</script>

<style scoped>

</style>
