<template>
  <div class="sliders-container">
    <article class="sliders">
      <div class="main-slider">
        <div class="main-slider__wrapper">
          <div class="main-slider__content">
            <div class="man"><a href="">A Wanted Man</a></div>
            <div class="title">(Jack Reacher #17)</div>
            <div class="author">By Lee Child</div>
          </div>
          <button class="left">
            <div>
              <img alt="img" src="@/assets/images/left.png">
            </div>
          </button>
          <button class="right">
            <div>
              <img alt="img" src="@/assets/images/right.png">
            </div>
          </button>
        </div>
      </div>
      <div class="side-slider">
        <div class="side-slider__wrapper">
          <div class="side-slider__content">
            <div id="deal">
              Deal of the Month
              <div id="book-title">The Human Face of Big Data</div>
            </div>
            <div id="save">
              Save 45% Today
              <div id="cost">$27.50</div>
              <button><span>Buy now</span></button>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>

export default {
  name: "MainSliders"
}
</script>

<style scoped lang="scss">

// SLIDE BAR
.sliders{
  width: 995px;
  display: flex;
  justify-content: space-between;
}
// MAIN SLIDER
   .sliders-container{
     width: 1280px;
     display: flex;
     justify-content: center;
     margin-top: 14px;
   }
.main-slider{
  background-image: url("@/assets/images/Banner.png");
.main-slider__wrapper{
  width: 714px;
  height: 304px;
  display: flex;
  justify-content: space-around;
}
.left{
  align-self: center;
  display: flex;
  order:1;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  opacity: 0.50;
  background-color: #303033;
  border-radius: 50%;
  border: none;
  padding-top: 4px;
  padding-right: 12px;
  margin-left: 3px;
&:hover{
   background-color: white;
 }
&:active{
   background-color: #e4bc6a;
 }
}
.right{
  align-self: center;
  display: flex;
  order:3;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  opacity: 0.76;
  background-color: #38383b;
  border-radius: 50%;
  border: none;
  padding-top: 4px;
  padding-left: 10px;
  margin-right: 3px;
&:hover{
   background-color: white;
 }
&:active{
   background-color: #e6bd6a;
 }
}
.main-slider__content{
  order:2;
  margin: 130px 0 0 260px;
  width: 329px;
  height: 98px;
  color: white;
  text-align: center;
}
.man{
  font-size: 47px;
  font-weight: bold;
  color: white;
a{
  text-decoration: none;
  color: white;
}
}
.title{
  font-size: 25px;
}
.author{
  font-size: 21px;
  font-weight: bold;
}
}

//SIDE SLIDE BAR
  .side-slider{
    width: 269px;
    height: 305px;
    color: #ffffff;
    background-image: url("@/assets/images/deal of the month.png");
.side-slider__content{
  width: 269px;
  height: 305px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
#deal{
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 46px;
  font-size: 27px;
  font-weight: 600;
div{
  font-size: 15px;
  font-weight: 300;
}
}
#save{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 7px;
  height: 90px;
  font-size: 21px;
  font-weight: 300;
div{
  font-weight: 600;
  font-size: 29px;
  margin-bottom: 6px;
}
}
button{
  background-color:#52a452;
  border:none;
  border-radius: 2px;
  color: white;
  display: flex;
  width: 108px;
  height: 28px;
  justify-content: center;
  text-shadow: 0.5px 0.9px 0 rgba(74, 151, 74, 0.75);

  font-size: 19px;
&:hover{
   color: #636364;
 }
&:active{
   background-image: linear-gradient(to top, rgba(61, 253, 1, 0.3), rgba(91, 163, 78, 0.65));
   text-shadow: 1px 1px 2px black;
   color: #e6bd6a;
 }
}
}

</style>