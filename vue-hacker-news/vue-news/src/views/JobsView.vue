<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
//import bus from '../utils/bus.js';
import ListMixins from '../mixins/ListMixins.js'


export default {
  components: {
    ListItem,
  },
  // mounted() {
  //   bus.$emit('end:spinner');
  // }
  mixins: [ListMixins]
}
</script>

<style>
  
</style>