<template>
  <div>
    <PageHeader title="Blog" />
    <Blog />
  </div>
</template>
<script>
  import PageHeader from "~/components/PageHeader";
  import Blog from "~/components/Blog";
  export default {
    components: {
      Blog,
      PageHeader
    },
    head(){
      return {
        title: "Refix | Blog"
      }
    }
  }
</script>
