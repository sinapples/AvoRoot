<template>
  <v-app-bar
    app
    class="glassNav"
    elevation="0"
    color="rgba(255, 255, 255, 0.25)"
    dense
  >
    <div class="d-flex align-center">
      <router-link to="/Home" class="link">
        <v-icon class="pr-2"> mdi-cellphone-message</v-icon>
        Text Josh
      </router-link>
    </div>
    <v-spacer></v-spacer>

    <div class="link text-black   d-flex align-center">
      <router-link to="/Trang" class="link">
        Text Trang
        <v-icon class="pl-2"> mdi-cellphone-message</v-icon>
      </router-link>
    </div>
  </v-app-bar>
</template>
