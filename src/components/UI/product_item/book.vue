<template>
  <div
      class="book"
      v-for="book in books"
  >
    <discount
        class="discount"
        v-if="book.discount"
    />
    <a href=""><img :src="book.image" :alt="i"></a>
    <div class="titles">
      <div class="title">{{ book.title }}</div>
      <div class="title">{{ book.title2 }}</div>
    </div>
    <span class="price">{{ book.price }}</span>
  </div>
</template>

<script>
import Discount from "@/components/UI/product_item/discount";
export default {
  name: "book",
  components: {Discount},
  props: {
    books: {
      type: Array,
      required: true,
    }
  }

}
</script>

<style scoped lang="scss">
.book{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 226px;
  font-size: 15px;
}
.titles{
  text-align: center;
  margin-top: -5px;
}
.price{
  padding-top: 5px;
  color: #f05356;
  font-family: SegoeWP;
  font-size: 22px;
  font-weight: bold;
}
.discount{
  position: absolute;
  margin-bottom: 200px;
  margin-right: 10px;
}
</style>