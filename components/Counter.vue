<template>
  <section class="counterup_area text-center section_padding skyblue_bg">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <i class="icon-settings"></i>
          <h1 class="counter">6820</h1>
          <p>Refrigerator Repairs</p>
        </div><!--end .col-md-3-->
        <div class="col-md-3 col-sm-6">
          <i class="icon-donation"></i>
          <h1 class="counter">9000</h1>
          <p>Satisfied Clients</p>
        </div><!--end .col-md-3-->
        <div class="col-md-3 col-sm-6">
          <i class="icon-engineer"></i>
          <h1 class="counter">236</h1>
          <p>Repairing Experts</p>
        </div><!--end .col-md-3-->
        <div class="col-md-3 col-sm-6">
          <i class="icon-car-parts"></i>
          <h1 class="counter">4560</h1>
          <p>Product</p>
        </div><!--end .col-md-3-->
      </div><!--end .row-->
    </div><!--end .container-->
  </section>
</template>

<script>
    export default {
      name: "Counter",
      mounted() {
        if($(".counter").length) {
          $('.counter').counterUp({
            delay: 10,
            time: 4000
          });
        }
      }
    }
</script>

<style scoped>

</style>
