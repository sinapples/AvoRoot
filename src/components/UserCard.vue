<template>
  <v-card
    rounded="xl"
    width="88%"
    max-width="400"
    class="glass pa-0 ma-0"
    @click="onClick"
  >
    <v-card-text class="text-center">
      <v-row no-gutters align="center" justify="space-between">
        <v-spacer />
        <v-col>
          <v-card width="130" rounded="xl" class="glass pa-0 ma-0">
            <v-card-text>
              <v-avatar class="glassAvatar" :color="color" size="90">
                <v-img
                  src="https://firebasestorage.googleapis.com/v0/b/super-effective-eea44.appspot.com/o/photo-squashed.JPG?alt=media&token=b55d8a0c-bacf-40df-901c-c084a183ced0"
                ></v-img>
              </v-avatar>
              <v-card-text class="pa-2 pb-0  justify-center"
                >Hi I'm Josh</v-card-text
              >
            </v-card-text>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="  pa-0 ma-0" color="rgb(0,0,0,0)" elevation="0">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-start text-h8 mb-2">
                  Nice to meet you!
                </v-list-item-title>
                <div class=" text-start  body-4">
                  What's your preferred message app?
                </div>
                <div class=" pt-2 text-start  body-4">
                  Tap on the buttons below to add me.
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-spacer />
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msgApp: String,
    userName: String,
    color: String,
    link: String,
    glassColor: String,
    icon: String
  },
  data() {
    return {
      isClicked: false,
      show: false,
      cs: 'rgba( 88, 101, 242, 0.75 )'
    }
  },
  computed: {
    cssProps() {
      return {
        background: `${this.glassColor}`
      }
    }
  },
  methods: {
    onClick() {
      this.isClicked = !this.isClicked
      this.show = !this.show
      if (this.isClicked) {
        this.copyUsername()
      } else {
        // window.open(this.link, '_blank')
      }
    },
    copyUsername() {
      const usernameToCopy = document.querySelector('#testing-code')
      usernameToCopy.setAttribute('type', 'text') // 不是 hidden 才能複製
      usernameToCopy.select()

      try {
        const successful = document.execCommand('copy')
        const msg = successful ? 'successful' : 'unsuccessful'
        console.log(msg)
      } catch (err) {
        alert('Oops, unable to copy')
      }

      /* unselect the range */
      usernameToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    }
  }
}
</script>

<style>
.glass {
  background: rgba(255, 255, 255, 0.25) !important ;
  backdrop-filter: blur(4px) !important ;
  -webkit-backdrop-filter: blur(4px) !important ;
  border-radius: 10px !important ;
  border: 1px solid rgba(255, 255, 255, 0.18) !important ;
}
.glassButton {
  background: rgba(88, 101, 242, 0.75) !important ;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important ;
  backdrop-filter: blur(4px) !important ;
  -webkit-backdrop-filter: blur(4px) !important ;
  border-radius: 10px !important ;
  border: 1px solid rgba(255, 255, 255, 0.18) !important ;
}
.glassAvatar {
  background: rgba(88, 101, 242, 0.75) !important ;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important ;
  backdrop-filter: blur(4px) !important ;
  -webkit-backdrop-filter: blur(4px) !important ;
  /* border-radius: 10px !important ; */
  border: 1px solid rgba(255, 255, 255, 0.18) !important ;
}
</style>
