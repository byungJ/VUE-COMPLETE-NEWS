<template>
  <div class="header">
      <!-- <a href= -->
      <router-link to='/news'>News</router-link> | 
      <router-link to='/ask'>Ask</router-link> |
      <router-link to='/jobs'>Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .header {
        color: white;
        background-color: #42b883;
        display: flex;
        padding: 8px;
    }   
    /* router-link 자동으로 제공, 개발자도구 Elements에서 확인.*/
    .header .router-link-exact-active {
        color: #35495e;
    }
    .header a {
        color:  white;
    }
</style>