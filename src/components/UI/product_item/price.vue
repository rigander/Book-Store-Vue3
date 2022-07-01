<template>
  <span>${{ $store.state.price }}</span>
</template>

<script>
export default {
  name: "price"
}
</script>

<style scoped lang="scss">
$ff:SegoeWP;
span{
  color: #ffffff;
  font-family: $ff;
  font-size: 19px;
  font-weight: bold;
}
</style>