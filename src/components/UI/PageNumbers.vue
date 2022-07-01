<template>
  <div id="page-number">
    <div class="one"><a href="">1</a></div>
    <div class="two"><a href="">2</a></div>
    <div class="three"><a href="">3</a></div>
    <div class="four"><a href="">4</a></div>
    <div class="five"><a href="">5</a></div>
    <div class="six"><a href="">6</a></div>
  </div>
</template>

<script>
export default {
  name: "PageNumbers"
}
</script>

<style scoped lang="scss">
#page-number{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 138px;
  height: 28px;
  font-size: 16px;
  font-weight: 300;
  color: #646464;
  margin-left: 631px;
  margin-top: 21px;
  padding: 0;
  &:hover{
    color: #FFCC00;
  }
  div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 28px;
    width: 24px;
    padding: 0;
    a{
      text-decoration: none;
      color: #646464;
      &:hover{
        color: red;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .three{
    padding-top: 2px;
    height: 23px;
    border: 1px solid #bfbfbf;
    border-bottom: 4px solid #94bc6b;
  }
}
</style>