<template>
  <header>
    <div class="header-layout">
      <div class="account-nav-container">
        <nav class="account-nav">
          <ul>
            <li><a id="account-nav__sign-in" href="">Sign in</a></li>
            <li><a id="account-nav__my-account" href="">My Account</a></li>
            <li><a id="account-nav__order-status" href="">Order Status</a></li>
            <li><a id="account-nav__help" href="">Help</a></li>
          </ul>
        </nav>
      </div>
      <div class="header-content-container">
        <div class="header-content">
          <div class="header-content__books-online">
            <img
                @click="$router.push('/')"
                src="@/assets/images/header/logo.png" alt="">
          </div>
          <div class="header-content__search-panel">
            <input id="search" type="search">
            <button id="search-button">
              <div class="magnifying-glass">
                <div id="magnifying_circle"></div>
                <div id="stick-for__magnifying-circle"></div>
              </div><span>Search</span>
            </button>
          </div>
          <div class="header-content__your-cart">
            <div class="my-cart" >
              <div class="cart"
                   @click="$router.push('/product')"
              ><a href="" class="cart-link"><img src="@/assets/images/header/green-cart.png" alt="cart"></a></div>
              <div class="items">Your cart<div>(2 items)</div></div>
            </div>
            <div class="checkout">
              <div class="total-cost">$125.0</div>
              <button>Checkout</button>
            </div>
          </div>
          <div class="header-content__wish-list">
            <div class="star-wish-list">
              <div class="round-for-star">
                <div class="star"></div>
              </div>
              <div class="wish-list">Wish list</div>
            </div>
            <div class="twenty">20</div>

          </div>
        </div>
      </div>
      <div class="main-nav-wrapper">
        <nav class="main-nav">
          <ul>
            <li><a href="" id="main-nav__computers">Computers</a></li>
            <li><a href="" class="main-nav__cooking">Cooking</a></li>
            <li><a href="" class="main-nav__education">Education</a></li>
            <li><a href="" class="main-nav__fiction">Fiction</a></li>
            <li><a href="" class="main-nav__health">Health</a></li>
            <li><a href="" class="main-nav__math">Mathematics</a></li>
            <li><a href="" class="main-nav__medical">Medical</a></li>
            <li><a href="" class="main-nav__reference">Reference</a></li>
            <li><a href="" id="main-nav__science">Science</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "main-header"
}
</script>

<style scoped lang="scss">
//Variables
$ff:SegoeWP;
%black-button-styles{
  &:hover{
    background-image: linear-gradient(to top ,#424242 ,#242424);
  }
  &:active{
    background-image: linear-gradient(to top , #c2d1dc, rgba(36, 36, 36, 0.58));
  }
}

//Account Navigation Sign In
.account-nav-container{
  background-color: #424242;
}
.account-nav{
  width: 984px;
  margin: 0 auto;
  display:flex;
  height: 28px;
  justify-content: flex-end;
  align-items: center;
  background-color: #424242;
  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 319px;
    height: 16px;
    font-size: 16px;
    font-weight: 300;
    color: #fff;
    li{
      a{
        padding: 1px;
        text-decoration: none;
        color: white;
        &:hover{
          color: #FFCC00;
        }
        &:active{
          background-image: linear-gradient(to top , #858991, rgba(36, 36, 36, 0.58));
          color: #fdca01;
          border-radius: 2px;
        }
      }
    }
  }
}

//Header Content Part
.header-content-container{
  background-color: #f4f4f4;
  width: 1280px;
}
.header-content{
  height: 112px;
  width: 990px;
  margin: 0 auto;
  padding-right: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-content__books-online{
  margin-right: 43px;
}
.header-content__search-panel{
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #79b260;
  height: 40px;
  width: 458px;
  border-radius: 2px;
  padding-left: 4px;
  margin-right: 52px;
}
.magnifying-glass{
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30px;
  width: 25px;
  transform: rotate(315deg);
  #magnifying_circle{
    width: 16px;
    height: 16px;
    border: solid 3px white;
    border-radius: 50%;
    background-color: #79b260;
  }
  #stick-for__magnifying-circle {
    margin-top: -2px;
    margin-left: 5px;
    height: 8px;
    width: 5px;
    border-left: 5px solid white;
  }
}
#search{
  height: 33px;
  width: 328px;
  outline: none;
  margin: 0;
  padding: 0;
}
#search-button{
  width: 125px;
  height: 40px;
  background-color: #79b260;
  border: none;
  color: white;
  font-size: 23px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 2px;
  padding-bottom: 3px;
  &:hover{
    color: #FFCC00;
  }
  &:active{
    background-image: linear-gradient(to top , rgba(61, 253, 1, 0.3), rgba(91, 163, 78, 0.65));
    text-shadow: 1px 1px 2px black;
  }
  span{
    padding-bottom: 3px;
  }
}
.header-content__your-cart{
  width: 193px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: solid 1px grey;
  .my-cart{
    width: 192px;
    display: flex;
    justify-content: space-between;
  }
  .items{
    display: flex;
    width: 157px;
    color: #6d6d6d;
    font-size: 23px;
    div{
      font-size: 14px;
      padding-top: 9px;
      padding-left: 6px;
    }
  }
  .checkout{
    width: 185px;
    display: flex;
    justify-content: space-between;
  }
  .total-cost{
    font-size: 27px;
    font-weight: bold;
    color: #6d6d6d;
    padding-left: 3px;
    letter-spacing: 0.5px;
  }
  button{
    margin-right: 8px;
    align-self: end;
    height: 26px;
    width: 81px;
    background-image: linear-gradient(to top, #242424, #424242);
    box-shadow: inset 0.5px 0.9px 0 0 rgba(118, 118, 118, 0.75);
    color: white;
    border: none;
    border-radius: 1px;
    font-size: 15px;
    @extend%black-button-styles;
  }
}
.header-content__wish-list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 19px;
  padding-bottom: 15px;
  width: 90px;
  height: 50px;
  .twenty{
    margin-left: 78px;
    margin-top: -35px;
    align-self: end;
    display: flex;
    justify-content: center;
    font-size: 13px;
    font-family: $ff;
    color: white;
    width: 28px;
    height: 16px;
    border: none;
    border-radius: 20px;
    background-color: #79b260;
  }
  .round-for-star{
    background-color: #424242;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin: 0 auto -10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .star{
    position: relative;
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .9em;
    margin-right: .9em;
    margin-bottom: 1.2em;
    border-right:  .3em solid transparent;
    border-bottom: .7em  solid #f2f2f3;
    border-left:   .3em solid transparent;
    /* Controls the size of the stars. */
    font-size: 9px;
    &:before, &:after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      top: .6em;
      left: -1em;
      border-right:  1em solid transparent;
      border-bottom: .7em  solid #f2f2f3;
      border-left:   1em solid transparent;
      transform: rotate(-35deg);
    }
    &:after {
      transform: rotate(35deg);
    }
  }
  .wish-list{
    padding-top: 13px;
    width: 77px;
    word-spacing: 4px;
    letter-spacing: -1px;
    color: #6d6d6d;
    font-size: 21px;
  }
}

// Main Navigation Panel
.main-nav-wrapper{
  display: flex;
  flex-basis: 1280px;
  height: 40px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #bfbfbf;
}
.main-nav{
  ul{
    width: 987px;
    height: 19px;
    display: flex;
    justify-content: space-between;
    font-size: 19px;
    list-style: none;
    align-items: center;
    padding: 0 5px 0 0;
    li{
      a{
        padding: 8px;
        text-decoration: none;
        color: #5b5b5b;
        &:hover{
          color: #ff0000;
          font-weight: bold;
        }
        &:active{
          background-image: linear-gradient(to top, #79b260, #92d774);
          color: white;
        }
      }
    }
  }
}
</style>