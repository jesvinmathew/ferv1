<template>
  <div>
    <Slider />
    <FeaturedProducts />
    <LedChips />
    <About />
    <WhyChooseUs />
    <LedDriver />
    <Testimonial />
    <ContactHome />
  </div>
</template>
<script>
  import Slider from "~/components/Slider";
  import FeaturedProducts from "~/components/FeaturedProducts";
  import LedChips from "~/components/LedChips";
  import About from "~/components/About";
  import Testimonial from "~/components/Testimonial";
  import WhyChooseUs from "~/components/WhyChooseUs";
  import LedDriver from "~/components/LedDriver";
  import ContactHome from "~/components/ContactHome";
  export default {
    components: {
      Slider,
      LedChips,
      About,
      Testimonial,
      WhyChooseUs,
      FeaturedProducts,
      LedDriver,
      ContactHome,

    },

  }
</script>
