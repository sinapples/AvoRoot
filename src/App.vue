<template>
  <v-app>
    <v-app-bar app color="primary" dark dense>
      <div class="d-flex align-center">
        <v-icon class="pr-2"> mdi-cellphone-message</v-icon>
        Text Josh
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
