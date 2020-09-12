<template>
  <div>
    <PageHeader title="Applications" />
    <GalleryPage />
  </div>
</template>
<script>
  import PageHeader from "~/components/PageHeader";
  import GalleryPage from "~/components/GalleryPage";
  export default {
    components: {
      GalleryPage,
      PageHeader
    },
    head(){
      return {
        title: "Luxmill | Applications"
      }
    }
  }
</script>
