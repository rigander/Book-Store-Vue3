<template>
  <div class="discount">
    <span>30%</span>
    <span class="off">Off</span>
  </div>
</template>

<script>
export default {
  name: "discount"
}
</script>

<style scoped lang="scss">
.discount{
  $ff:SegoeWP;
  align-self: end;
  position: absolute;
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border:none;
  border-radius: 50%;
  background-color: #f05356;
  padding: 0;
  color: white;
  font-size: 19px;
  span{
    color: #ffffff;
    font-family: $ff;
    font-size: 19px;
    font-weight: bold;
  }
  .off{
    font-size: 13px;
    font-weight: normal;
    color: #ffffff;
  }
}
</style>