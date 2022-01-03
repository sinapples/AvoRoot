<template>
  <v-app>
    <div class="backgroundg" height="100%"></div>
    <v-app-bar
      app
      class="glassNav"
      elevation="0"
      color="rgba(255, 255, 255, 0.25)"
      dense
    >
      <div class="d-flex align-center">
        <v-icon class="pr-2"> mdi-cellphone-message</v-icon>
        Text Josh
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <!-- </div> -->
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

<style lang="scss">
// Glass

.glassAvatar {
  // background: rgba(255, 255, 255, 0.75) !important ;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important ;
  backdrop-filter: blur(4px) !important ;
  -webkit-backdrop-filter: blur(4px) !important ;
  /* border-radius: 10px !important ; */
  border: 1px solid rgba(255, 255, 255, 0.18) !important ;
}

.glass {
  background: rgba(255, 255, 255, 0.25) !important ;
  backdrop-filter: blur(4px) !important ;
  -webkit-backdrop-filter: blur(4px) !important ;
  border-radius: 10px !important ;
  border: 1px solid rgba(255, 255, 255, 0.18) !important ;
}
.glassButton {
  // background: rgba(88, 101, 242, 0.75) !important ;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important ;
  backdrop-filter: blur(4px) !important ;
  -webkit-backdrop-filter: blur(4px) !important ;
  border-radius: 10px !important ;
  border: 1px solid rgba(255, 255, 255, 0.18) !important ;
}
.glassAvatar {
  // background: rgba(88, 101, 242, 0.75) !important ;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important ;
  backdrop-filter: blur(4px) !important ;
  -webkit-backdrop-filter: blur(4px) !important ;
  /* border-radius: 10px !important ; */
  border: 1px solid rgba(255, 255, 255, 0.18) !important ;
}

//Other

.cardContainer {
  width: 95%;
  margin: auto;

  // @media screen and (max-width: 1000px) {
  //   width: 100%;

  // }
}
.page-wrapper {
  width: 60%;
  margin: auto;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
}
.glassNav {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border-radius: 10px;
}
.background {
  background: #c2e59c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #64b3f4,
    #c2e59c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #64b3f4,
    #c2e59c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.backgroundg {
  background-image: linear-gradient(to top, #64b3f4, #c2e59c);
  position: fixed;
  // background-image: url('https://pokemon.originalstitch.com/en/img/pattern_all/194.jpg');
  // background-image: url('https://cdn.pixabay.com/photo/2017/10/10/09/44/the-background-2836575_960_720.jpg');
  // background-repeat: repeat;
  backdrop-filter: blur(4px) !important ;
  background-size: cover;
  background-attachment: fixed;
  // background-size: 100% 900px;
  width: 100%;
  height: 100%;
}
</style>
