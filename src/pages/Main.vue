<template>
  <div class="main-container">
    <div class="main-wrapper">
      <main-header></main-header>
      <main-sliders></main-sliders>
      <main-content></main-content>
      <main-footer></main-footer>
    </div>
  </div>
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

<style lang="scss">
.main-container{
  display: flex;
}
.main-wrapper{
  flex-basis: 1280px;
  font-family: SegoeWP;
  border: solid 1px rgba(0, 0, 1, 0.16);
}
</style>