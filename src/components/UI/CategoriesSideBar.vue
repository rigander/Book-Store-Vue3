<template>
  <div class="categories__content">
    <h2 id="categories">Categories</h2>
    <button>ALL</button>
    <ul class="fiction">
      <div class="list-title">Fiction & Literature</div>
      <li><a href=""><div>Children</div></a></li>
      <li
          @click="$router.push('/category')"
      ><a href=""><div>Science</div></a></li>
      <li><a href=""><div>Fantasy</div></a></li>
      <li><a href=""><div>Mystery</div></a></li>
      <li><a href=""><div>Romance</div></a></li>
      <li><a href=""><div>Horror</div></a></li>
      <li><a href=""><div>Poetry</div></a></li>
      <li><a href=""><div>Literature</div></a></li>
      <li><a href=""><div>Crime</div></a></li>
    </ul>
    <ul class="non-fiction">
      <div class="list-title">Non-Fiction</div>
      <li><a href=""><div>Comic</div></a></li>
      <li><a href=""><div>Cook</div></a></li>
      <li><a href=""><div>Psychology</div></a></li>
      <li><a href=""><div>Medical</div></a></li>
      <li><a href=""><div>Art</div></a></li>
      <li><a href=""><div>Photography</div></a></li>
      <li><a href=""><div>Law</div></a></li>
      <li><a href=""><div>History</div></a></li>
      <li><a href=""><div>Business</div></a></li>
      <li><a href=""><div>Computer</div></a></li>
    </ul>
    <div class="others-container">
      <ul class="other">
        <div class="list-title">Other</div>
        <li><a href=""><div>Baby</div></a></li>
        <li><a href=""><div>Sex</div></a></li>
        <li><a href=""><div>Travel</div></a></li>
        <li><a href=""><div>Science</div></a></li>
        <li><a href=""><div>Sports</div></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesSideBar"
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/aside-left";
</style>