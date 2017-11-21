<template>
  <div id="header">
    <ul class="nav nav-pills">
      <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
      <router-link to="/About" tag="li" active-class="active"><a>About</a></router-link>
      <router-link
        tag="li"
        :to="link"
        active-class="active" ><a>Contact with query parameters</a></router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'contact',
          params: {

          },
          query: {
            locale: 'en',
            q: 100
          },
          hash: '#data'
        }
      }
    }
  }
</script>

<style>

</style>
