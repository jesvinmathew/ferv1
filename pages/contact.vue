<template>
  <div>
    <PageHeader title="Contact Us" />
    <Contact />
    <FeaturedProducts />
  </div>
</template>
<script>
  import PageHeader from "~/components/PageHeader";
  import Contact from "~/components/Contact";
  import FeaturedProducts from "~/components/FeaturedProducts";
  //import ServiceThree from "~/components/ServiceThree";
  export default {
    components: {
      PageHeader,
      Contact,
      FeaturedProducts,
    },
    head(){
      return {
        title: "Refix | Contact Us"
      }
    }
  }
</script>
