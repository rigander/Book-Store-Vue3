<template>
  <body>
  <div class="main-wrapper">
    <main-header></main-header>
    <main-sliders></main-sliders>
    <main-content></main-content>
    <main-footer></main-footer>
  </div>
  </body>
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
body{
  display: flex;
    .main-wrapper{
      margin: auto;
      flex-basis: 1280px;
      font-family: SegoeWP;
      border: solid 1px rgba(0, 0, 1, 0.16);
    }
}
</style>