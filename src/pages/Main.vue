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
export default {
  name: "Main",
}
</script>

<style lang="scss">
.main-container{
  display: flex;
  font-family: SegoeWP;
}
.main-wrapper{
  flex-basis: 1280px;
  border: solid 1px rgba(0, 0, 1, 0.16);
}
</style>