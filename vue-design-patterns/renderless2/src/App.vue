<template>
  <div>
    <!-- <div>{{ urltext }}</div> -->
    <!-- <fetch-data :url="urltext"> -->
    <fetch-data url="http://jsonplaceholder.typicode.com/users/1">
      <!--  -->
      <template v-slot="{ response, loading }">
        <div v-if="!loading">
          드디어 나왔다~~~{{ response }}
        </div>
        <div v-if="loading">
          Loading...
        </div>
      </template>
    </fetch-data>
  </div>
</template>

<script>
import FetchData from './components/FetchData.vue';

export default {
  data() {
    return {
      urltext: "http://jsonplaceholder.typicode.com/users/1",
    }
  },
  components: {
    FetchData,
  }
}
</script>

<style>

</style>