<template>
  <div class="product-list__content">
    <div>
      <discount/>
      <a href=""><img  :src="products[0].img" :alt="i"></a>
      <p>The Hare With Amber Eyes</p><price/>
    </div>
    <div>
      <a href=""><img :src="products[1]" :alt="i"></a>
      <p>The war of </p><span class="art">Art</span><span>$60</span></div>
    <div>
      <discount/>
      <a href=""><img  :src="products[2]" :alt="i"></a><p>The Hare With Amber Eyes</p><span>$25</span></div>
    <div>
      <a href=""><img :src="products[3]" :alt="i"></a>
      <p class="immortals">The Immortals of Meluha</p><span>$80</span></div>
    <div>
      <a href=""><img :src="products[4]" :alt="i"></a>
      <p>Life Is What You Make It</p><span>$200</span></div>
    <div>
      <a href=""><img :src="products[5]" :alt="i"></a>
      <p>The Hare With Amber Eyes</p><span>$200</span></div>
    <div>
      <a href=""><img :src="products[6]" :alt="i"></a>
      <p>The war of</p><span class="art">Art</span><span>$150</span></div>
    <div>
      <discount/>
      <a href=""><img  :src="products[7]" alt="image"></a>
      <p>The Hare With Amber Eyes</p><span>$100</span></div>
    <div>
      <a href=""><img :src="products[8]" :alt="i"></a>
      <p class="immortals">The Immortals of Meluha</p>
      <span>$152</span></div>
    <div>
      <a href=""><img :src="products[9]" :alt="i"></a>
      <p>Life Is What You Make It</p>
      <span>$200</span>
    </div>
    <div>
      <a href=""><img :src="products[10]" :alt="i"></a>
      <p>The Hare With Amber Eyes</p>
      <span>$220</span>
    </div>
    <div>
      <a href=""><img :src="products[11]" :alt="i"></a>
      <p>The war of </p>
      <span class="art">Art</span><span>$10</span>
    </div>
    <div>
      <a href=""><img :src="products[12]" :alt="i"></a>
      <p>The Hare With Amber Eyes</p><span>$22</span>
    </div>
    <div>
      <discount/><a href=""><img  :src="products[13]" alt="image"></a>
      <p class="immortals">The Immortals of Meluha</p>
      <span>$300</span>
    </div>
    <div>
      <a href=""><img :src="products[14]" :alt="i"></a>
      <p>Life Is What You Make It</p>
      <span>$205</span>
    </div>
    <page-numbers></page-numbers>
  </div>
</template>

<script>
export default {
  name: "ProductListContent",
  data() {
    return {
         products: [
            {id:1, img: require('@/assets/images/BestSellers/1.png'), price:'50$' },
             require('@/assets/images/BestSellers/2.png'),
             require('@/assets/images/BestSellers/3.png'),
             require('@/assets/images/BestSellers/4.png'),
             require('@/assets/images/BestSellers/5.png'),
             require('@/assets/images/BestSellers/6.png'),
             require('@/assets/images/BestSellers/7.png'),
             require('@/assets/images/BestSellers/8.png'),
             require('@/assets/images/BestSellers/9.png'),
             require('@/assets/images/BestSellers/10.png'),
             require('@/assets/images/BestSellers/11.png'),
             require('@/assets/images/BestSellers/12.png'),
             require('@/assets/images/BestSellers/13.png'),
             require('@/assets/images/BestSellers/14.png'),
             require('@/assets/images/BestSellers/15.png'),
      ],
         i: 'book image'
    }
  },
  methods: {
    createProductItem() {
      const newProduct = {
        id: Date.now(),
        title: this.title,
        img: this.img,
        price: this.price,
      }
      this.products.push(newProduct);

    }
  }
}

</script>

<style scoped lang="scss">
$cw:996px;
$ff:SegoeWP;
.product-list__content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5px 0 5px;
  border: solid 1px #d8dce0;
  border-top: none;
  height: 825px;
  div{
    position: relative;
    font-size: 15px;
    font-weight: 300;
    text-align: center;
    color: #646464;
    height: 256px;
    width: 125px;
    display: flex;
    flex-direction: column;
    padding-left: 9px;
    .discount{
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
    p{
      margin: 0;
    }
    img{
      height: 177px;
    }
    span{
      display: block;
      font-weight: bold;
      font-size: 22px;
      color: #f05356;
    }
  }
  .art{
    color: inherit;
    font: inherit;
  }
  .immortals{
    padding: 0 7px;
  }
}
</style>