<template>
  <main-header></main-header>
  <main-sliders></main-sliders>
  <main-content></main-content>
  <main-footer></main-footer>
</template>

<script>
import mainHeader from "@/components/MainHeader";
import mainSliders from "@/components/MainSliders";
import mainContent from "@/components/MainContent";
import mainFooter from "@/components/MainFooter";
export default {
  name: "Main",
  components: {
    mainHeader,
    mainSliders,
    mainContent,
    mainFooter
  }

}
</script>

<style scoped>

</style>