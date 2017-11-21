<template>
  <div>
    CONTACT
    <div>Phone: 801-458-5555</div>
    <div>Email: wesleysmith1@mail.weber.edu</div>
    <hr>
    <div>Query Parameters: </div>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>
