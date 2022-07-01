<template>
  <main id="main-content-wrapper">
    <div class="product-list-content">
      <aside class="categories">
        <categories-side-bar></categories-side-bar>
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
        <product-list-content></product-list-content>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainContent",

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

    }
  }
}
</style>