<template>
  <div class="main_menu_area">
    <div class="container-fluid">
      <div class="row">
        <div class="header_nav">
          <nav class="navbar navbar-default">
            <!-- mobile display -->
            <div class="logo_flex">
              <button type="button" class="navbar-toggle">
                <span class="icon-menu">M <i class="fa fa-angle-down"></i></span>
              </button>
              <a class="logo" href="/">
                <img src="/assets/images/logo.png" alt="logo">
              </a>
            </div>
            <div class="navbar_flex responsive_menu">
              <div class="navbar-collapse">
                <ul class="nav navbar-nav">
                  <li>
                    <nuxt-link to="/">Home</nuxt-link>  <span class="responsive_click_menu fa fa-angle-down"></span>
                    <ul class="dropdown-menu">
                      <li><nuxt-link to="/">Home V1</nuxt-link></li>
                      <li><nuxt-link to="/index-2">Home V2</nuxt-link></li>
                    </ul>
                  </li>
                  <li><nuxt-link to="/about">About</nuxt-link></li>
                  <li>
                    <nuxt-link to="/services">Services</nuxt-link>  <span class="responsive_click_menu fa fa-angle-down"></span>
                    <ul class="dropdown-menu">
                      <li><nuxt-link to="/services">Service</nuxt-link></li>
                      <li><nuxt-link to="/service-refrigerator">Refrigerator</nuxt-link></li>
                    </ul>
                  </li>
                  <li>
                    <nuxt-link to="/book-online">Pages</nuxt-link>  <span class="responsive_click_menu fa fa-angle-down"></span>
                    <ul class="dropdown-menu">
                      <li><nuxt-link to="/book-online">Book Online</nuxt-link></li>
                      <li><nuxt-link to="/pricing">Pricing</nuxt-link></li>
                      <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                    </ul>
                  </li>
                  <li>
                    <nuxt-link to="/blog">Blog</nuxt-link>  <span class="responsive_click_menu fa fa-angle-down"></span>
                    <ul class="dropdown-menu">
                      <li><nuxt-link to="/blog">Blog Grid</nuxt-link></li>
                      <li><nuxt-link to="blog-details">Blog Details</nuxt-link></li>
                    </ul>
                  </li>
                  <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                </ul>
              </div><!-- /.navbar-collapse -->
            </div>

            <div class="social_icon_flex">
              <div class="header-social-right">
                <ul>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                </ul>
                <span class="contact_us">
				    				Call us today<br>
				    				<span>666 888 0000</span>
				    			</span>
              </div><!--end .header-social-right-->
            </div><!--end .col-md-4-->
          </nav><!--end .navbar-->
        </div><!--end .header_nav-->
      </div><!--end .row-->
    </div><!--end .container-fluid-->
  </div>
</template>

<script>
    export default {
      name: "Header",
      mounted() {
        const menu_fixed = document.querySelector('.main_menu_area');
        const topOfNav = menu_fixed.offsetTop;

        function fixed_nav() {
          if (window.scrollY >= topOfNav || window.scrollY === topOfNav) {
            document.body.style.paddingTop = menu_fixed.offsetHeight + 'px';
            document.body.classList.add('fixed-scroll-nav');
          } else {
            document.body.style.paddingTop = 0;
            document.body.classList.remove('fixed-scroll-nav');
          }
        }
        window.addEventListener('scroll', fixed_nav);

        $(document).on('click','.main_menu_area .navbar-default .navbar-nav > li > span.responsive_click_menu:not(:only-child)', function(e) {
          $(this).siblings('.dropdown-menu').toggle();
          $('.dropdown-menu').not($(this).siblings()).hide();
          e.stopPropagation();
        });
        $(document).on('click','.main_menu_area .header_nav .navbar-toggle', function() {
          $('.main_menu_area .responsive_menu').toggleClass('responsive_menu_show');
        });
      }
    }
</script>

<style scoped>

</style>
