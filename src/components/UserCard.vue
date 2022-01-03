<template>
  <v-card rounded="xl" width="100%" class="glass pa-0 mx-3">
    <v-list-item>
      <v-list-item-avatar class="glassAvatar " size="80" color="grey">
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/super-effective-eea44.appspot.com/o/photo-squashed.JPG?alt=media&token=b55d8a0c-bacf-40df-901c-c084a183ced0"
        ></v-img
      ></v-list-item-avatar>
      <v-list-item-content>
        <div class=" "></div>
        <v-list-item-title class="text-h5 mb-1">
          Hi I'm Josh
        </v-list-item-title>
        <v-list-item-subtitle>
          What's your preferred message app?
          <div>
            Tap on the buttons below to add me.
          </div>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-action> </v-card-action>
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

<style></style>
