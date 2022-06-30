<template>
    <div class="main-wrapper">
      <main-header></main-header>
      <main-sliders></main-sliders>
      <main-content></main-content>
      <main-footer></main-footer>
    </div>
</template>

<script>
export default {
  name: "main-page",
}
</script>

<style lang="scss">
.main-wrapper{
  font-family: SegoeWP;
  flex-basis: 1280px;
  border: solid 1px rgba(0, 0, 1, 0.16);
}
</style>