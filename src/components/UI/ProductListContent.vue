<template>
  <div class="product-list__content">
    <book
        :books="books"
        :indexStart = "indexStart"
        :indexEnd = "indexEnd"
        :paginated = "paginated"
        :pageSize = "pageSize"
    />
    <PageNumbers/>
  </div>
</template>

<script>
import Book from "@/components/UI/product_item/book";
import PageNumbers from "@/components/UI/PageNumbers";
export default {
  name: "ProductListContent",
  components: {PageNumbers, Book},
  data() {
    return {
      books: [
        {
          id: 1,
          title: 'The Hare With ',
          title2: 'Amber Eyes',
          image: require('@/assets/images/BestSellers/1.png'),
          price: '90$',
          discount: true
        },
        {
          id: 2,
          title: 'The war of',
          title2: 'Art',
          image: require('@/assets/images/BestSellers/2.png'),
          price: '60$',
          discount: false
        },
        {
          id: 3,
          title: 'The Hare With',
          title2: 'Amber Eyes',
          image: require('@/assets/images/BestSellers/3.png'),
          price: '25$',
          discount: true
        },
        {
          id: 4,
          title: 'The Immortals',
          title2: 'of Meluha',
          image: require('@/assets/images/BestSellers/4.png'),
          price: '80$',
          discount: false
        },
        {
          id: 5,
          title: 'Life is What You',
          title2: 'Make It',
          image: require('@/assets/images/BestSellers/5.png'),
          price: '200$',
          discount: false
        },
        {
          id: 6,
          title: 'The Hare With',
          title2: 'Amber Eyes',
          image: require('@/assets/images/BestSellers/6.png'),
          price: '200$',
          discount: false
        },
        {
          id: 7,
          title: 'The war of',
          title2: 'Art',
          image: require('@/assets/images/BestSellers/7.png'),
          price: '150$',
          discount: false
        },
        {
          id: 8,
          title: 'The Hare With',
          title2: 'Amber Eyes',
          image: require('@/assets/images/BestSellers/8.png'),
          price: '100$',
          discount: true
        },
        {
          id: 9,
          title: 'The Immortals',
          title2: 'of Meluha',
          image: require('@/assets/images/BestSellers/9.png'),
          price: '152$',
          discount: false
        },
        {
          id: 10,
          title: 'Life is What You',
          title2: 'Make It',
          image: require('@/assets/images/BestSellers/10.png'),
          price: '200$',
          discount: false
        },
        {
          id: 11,
          title: 'The Hare With',
          title2: 'Amber Eyes',
          image: require('@/assets/images/BestSellers/11.png'),
          price: '220$',
          discount: false
        },
        {
          id: 12,
          title: 'The war of',
          title2: 'Art',
          image: require('@/assets/images/BestSellers/12.png'),
          price: '10$',
          discount: false
        },
        {
          id: 13,
          title: 'The Hare With',
          title2: 'Amber Eyes',
          image: require('@/assets/images/BestSellers/13.png'),
          price: '22$',
          discount: false
        },
        {
          id: 14,
          title: 'The Immortals',
          title2: 'of Meluha',
          image: require('@/assets/images/BestSellers/14.png'),
          price: '300$',
          discount: true
        },
        {
          id: 15,
          title: 'Life is What You',
          title2: 'Make It',
          image: require('@/assets/images/BestSellers/15.png'),
          price: '205$',
          discount: false
        },



      ],
      current: 1,
      pageSize: 10
    }
  },
  computed: {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      return this.books.slice(this.indexStart, this.indexEnd);
    }
  },
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