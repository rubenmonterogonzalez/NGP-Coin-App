<template>
  <v-main>
    <v-container>
      <div class="block text-center notFound mt-15">
        <h1>Page not found</h1>
        <i class="fas fa-exclamation-triangle fa-5x red--text mt-15"></i>
        <p class="mt-15">
          We are sorry, the page you requested could not be found. Please go
          back to the homepage or contact with the admin.
        </p>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "NotFound",

  data: () => ({}),
};
</script>
