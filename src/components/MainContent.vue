<template>
  <main id="main-content-wrapper">
    <div class="product-list-content">
      <aside class="categories">
        <div class="categories__content">
          <h2 id="categories">Categories</h2>
          <button>ALL</button>
          <ul class="fiction">
            <div class="list-title">Fiction & Literature</div>
            <li><a href=""><div>Children</div></a></li>
            <li><a href="./category-page.html"><div>Science</div></a></li>
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
      </aside>
      <section class="product-list">
        <div class="product-list__nav">
          <ul>
            <li><div class="box-before"></div><a href="">Best Sellers</a><div class="box-after"></div></li>
            <li><div class="shadow"><a href="">New Arrivals</a></div></li>
            <li><div class="shadow"><a href="">Used Books</a></div></li>
            <li><div class="shadow"><a href="">Special Offers</a></div></li>
          </ul><div class="big-box"></div>
        </div>
        <div class="product-list__best-sellers">
          <div><div class="discount"><span>30%</span><span class="off">Off</span></div><a href=""><img src="@/assets/images/BestSellers/1.png" alt="image"></a><p>The Hare With Amber Eyes</p><span>$50</span> </div>
          <div><a href=""><img src="@/assets/images/BestSellers/2.png" alt="image"></a><p>The war of </p><span class="art">Art</span><span>$60</span></div>
          <div><div class="discount"><span>30%</span><span class="off">Off</span></div><a href=""><img src="@/assets/images/BestSellers/3.png" alt="image"></a><p>The Hare With Amber Eyes</p><span>$25</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/4.png" alt="image"></a><p class="immortals">The Immortals of Meluha</p><span>$80</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/5.png" alt="image"></a><p>Life Is What You Make It</p><span>$200</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/6.png" alt="image"></a><p>The Hare With Amber Eyes</p><span>$200</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/7.png" alt="image"></a><p>The war of</p><span class="art">Art</span><span>$150</span></div>
          <div><div class="discount"><span>30%</span><span class="off">Off</span></div><a href=""><img src="@/assets/images/BestSellers/8.png" alt="image"></a>The Hare With Amber Eyes<span>$100</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/9.png" alt="image"></a><p class="immortals">The Immortals of Meluha</p><span>$152</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/10.png" alt="image"></a><p>Life Is What You Make It</p><span>$200</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/11.png" alt="image"></a><p>The Hare With Amber Eyes</p><span>$220</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/12.png" alt="image"></a><p>The war of </p><span class="art">Art</span><span>$10</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/13.png" alt="image"></a><p>The Hare With Amber Eyes</p><span>$22</span></div>
          <div><div class="discount"><span>30%</span><span class="off">Off</span></div><a href=""><img src="@/assets/images/BestSellers/14.png" alt="image"></a><p class="immortals">The Immortals of Meluha</p><span>$300</span></div>
          <div><a href=""><img src="@/assets/images/BestSellers/15.png" alt="image"></a><p>Life Is What You Make It</p><span>$205</span></div>
          <div id="page-number">
            <div class="one"><a href="">1</a></div>
            <div class="two"><a href="">2</a></div>
            <div class="three"><a href="">3</a></div>
            <div class="four"><a href="">4</a></div>
            <div class="five"><a href="">5</a></div>
            <div class="six"><a href="">6</a></div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainContent"
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/normalize.css";
@font-face {
  font-family: SegoeWP;
  src: url("@/assets/fonts/Segoe WP Regular.ttf");
}
$cw:996px;
$ff:SegoeWP;

body{
  display: flex;
  .main-wrapper{
    margin: auto;
    flex-basis: 1280px;
    font-family: $ff;
    border: solid 1px rgba(0, 0, 1, 0.16);
  }
}
#main-content-wrapper{
  margin-top: 14px;
  width: 1280px;
  display: flex;
  justify-content: center;
  .product-list-content{
    width: $cw;
    display: flex;
    justify-content: center;
    @import "@/assets/scss/aside-left.scss";
    section{
      width: 798px;
      height: 864px;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      .product-list__nav{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 39px;
        ul{
          display: flex;
          padding: 0;
          margin: 0;
          li{
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            width: 140px;
            height: 37px;
            border: solid 1px #d8dce0;
            border-left: none;
            background-color: rgba(216, 220, 224, 0.71);
            text-shadow: 0.5px 0.9px 0 #fff;
            font-size: 17px;
            font-weight: 300;
            color: #6b6969;
            &:first-child{
              font-weight: bold;
              border-bottom: none;
              border-left: solid 1px #d8dce0;
              background-color: white;
            }
            .shadow{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 139px;
              height: 37px;
              border-left: solid 1px white;

            }
            .box-before{
              position: absolute;
              left:342px;
              top: 553px;
              height: 1px;
              width: 1px;
              background-color: #d8dce0;
            }
            .box-after{
              position: absolute;
              left:483px;
              top: 553px;
              height: 1px;
              width: 1px;
              background-color: #d8dce0;
            }
            a{
              padding: 1px;
              text-decoration: none;
              color: black;
              opacity: 75%;
              &:hover{
                font-size: 19px;
              }
            }
          }
        }
        .big-box{
          width: 232px;
          height: 38px;
          border-bottom: 1px solid #d8dce0;
        }
      }
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
      .product-list__best-sellers{
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
    }
  }
}
</style>