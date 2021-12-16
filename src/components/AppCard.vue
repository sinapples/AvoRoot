<template>
  <v-card width="150px" class="glass text-center" dense @click="onClick">
    <v-card-title class="pa-1 justify-center">{{ msgApp }}</v-card-title>
    <v-avatar class="glassAvatar" :color="color" size="56">
      <v-icon color="white">{{ icon }}</v-icon>
    </v-avatar>
    <v-card-text class="pa-1 ">
      {{ userName }}
      <v-icon small class="pl-1">mdi-content-copy</v-icon>
    </v-card-text>
    <v-card-actions class="pa-0 ma-0">
      <v-btn class="glassButton" tile block small dark :color="color"
        >Open App</v-btn
      >
    </v-card-actions>
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
      cs: 'rgba( 0, 0, 0, 0.75 )'
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
