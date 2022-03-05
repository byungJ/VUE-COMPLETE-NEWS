<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixins from '../mixins/ListMixins.js'


export default {
  components: {
    ListItem,
  },
  mixins: [ListMixins]
}
</script>

<style>

</style>