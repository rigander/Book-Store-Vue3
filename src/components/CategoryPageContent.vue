<template>
  <main id="main-content-wrapper">
    <div class="product-list-content">
      <aside class="categories">
        <categories-side-bar></categories-side-bar>
      </aside>
      <section class="product-list">
        <div class="title-science-fiction"><h4>Science Fiction</h4></div>
        <div class="product-list__best-sellers">
          <div><div class="discount"><span>30%</span><span class="off">Off</span></div><a href=""><img src="@/assets/images/BestSellers/1.png" alt="image"><p>The Hare With Amber Eyes</p></a><span>$50</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/2.png" alt="image"><p>The war of </p><span class="art">Art</span></a><span>$60</span></div>
          <div><div class="discount"><span>30%</span><span class="off">Off</span></div><a href=""><img src="@/assets/images/BestSellers/3.png" alt="image"><p>The Hare With Amber Eyes</p></a><span>$25</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/4.png" alt="image"><p class="immortals">The Immortals of Meluha</p></a><span>$80</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/5.png" alt="image"><p>Life Is What You Make It</p></a><span>$200</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/6.png" alt="image"><p>The Hare With Amber Eyes</p></a><span>$200</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/7.png" alt="image"><p>The war of</p><span class="art">Art</span></a><span>$150</span></div>
          <div><div class="discount"><span>30%</span><span class="off">Off</span></div><a href=""><img src="@/assets/images/BestSellers/8.png" alt="image">The Hare With Amber Eyes</a><span>$100</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/9.png" alt="image"><p class="immortals">The Immortals of Meluha</p></a><span>$152</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/10.png" alt="image"><p>Life Is What You Make It</p></a><span>$200</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/11.png" alt="image"><p>The Hare With Amber Eyes</p></a><span>$220</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/12.png" alt="image"><p>The war of </p><span class="art">Art</span></a><span>$10</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/13.png" alt="image"><p>The Hare With Amber Eyes</p></a><span>$22</span></div>
          <div><div class="discount"><span>30%</span><span class="off">Off</span></div><a href=""><img src="@/assets/images/BestSellers/14.png" alt="image"><p class="immortals">The Immortals of Meluha</p></a><span>$300</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/15.png" alt="image"><p>Life Is What You Make It</p></a><span>$205</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/11.png" alt="image"><p>The Hare With Amber Eyes</p></a><span>$220</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/12.png" alt="image"><p>The war of </p><span class="art">Art</span></a><span>$10</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/13.png" alt="image"><p>The Hare With Amber Eyes</p></a><span>$22</span></div>
          <div><div class="discount"><span>30%</span><span class="off">Off</span></div><a href=""><img src="@/assets/images/BestSellers/14.png" alt="image"><p class="immortals">The Immortals of Meluha</p></a><span>$300</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/15.png" alt="image"><p>Life Is What You Make It</p></a><span>$205</span></div>
          <ul id="page-number">
            <li class="one"><a href="">1</a></li>
            <li class="two"><a href="">2</a></li>
            <li class="three"><a href="">3</a></li>
            <li class="four"><a href="">4</a></li>
            <li class="five"><a href="">5</a></li>
            <li class="six"><a href="">6</a></li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import CategoriesSideBar from "@/components/UI/CategoriesSideBar";
export default {
  name: "CategoryPageContent",
  components: {CategoriesSideBar}
}
</script>

<style lang="scss">
@import "@/assets/scss/normalize.css";
@import "@/assets/scss/category-page.scss";
</style>