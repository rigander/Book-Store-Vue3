<template>
  <div class="main-container">
    <div class="main-wrapper">
      <main-header></main-header>
      <product-page-content></product-page-content>
      <main-footer></main-footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-page",
}
</script>

<style>
@import "@/assets/scss/normalize.css";
@font-face {
  font-family: SegoeWP;
  src: url("@/assets/fonts/Segoe WP Regular.ttf");
}
.main-container{
  display: flex;
}
.main-wrapper{
  flex-basis: 1280px;
  border: solid 1px rgba(0, 0, 1, 0.16);
}
</style>