<template>
  <div>
    <ul>
      <item>아이템 1</item>
      <item>아이템 2 
        <button>확장이 가능하다...!!</button>
      </item>
      <item>아이템 3
        <img src="./assets/logo.png" alt="vue logo" width="30" height="30"/>
      </item>
      <item>
        <div style="color: blue; font-size: 50px">아이템 4</div>
      </item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
}
</script>

<style>

</style>