<template>
  <div>
    <PageHeader title="About Us" />
    <About />
    <FeaturedProducts />
    <AboutTwo />
    <AboutThree />
    <Testimonial />
    <CallToAction />
  </div>
</template>

<script>
  import PageHeader from "~/components/PageHeader";
  import About from "~/components/About";
  import Counter from "~/components/Counter";
  import FeaturedProducts from "~/components/FeaturedProducts";
  import AboutTwo from "~/components/AboutTwo";
  import AboutThree from "~/components/AboutThree";
  import Testimonial from "~/components/Testimonial";
  import CallToAction from "~/components/CallToAction";
  export default {
    components: {
      PageHeader,
      AboutThree,
      Counter,
      FeaturedProducts,
      AboutTwo,
      About,
      Testimonial,
      CallToAction,

    },
    head(){
      return {
        title: "Luxmill | About Us"
      }
    }
  }
</script>
