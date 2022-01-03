<template>
  <div class="glass py-2 text-center" dense @click="onClick">
    <v-row
      justify="space-around"
      no-gutters
      align-content="center"
      align="center"
    >
      <v-col cols="5">
        <v-avatar class="glassAvatar" :color="color" size="48">
          <v-icon color="white">{{ icon }}</v-icon>
        </v-avatar>

        <span class=" heading justify-center">{{ msgApp }}</span>
      </v-col>

      <!--Friendcode -->
      <span v-if="friendCode">
        <v-col cols="4">
          <v-row justify="space-around" align-content="center" align="center">
            <span>
              {{ userName }}
            </span>
          </v-row>
          <v-row justify="space-around" align-content="center" align="center">
            <span>
              <!-- {{ friendCode }} -->
            </span>
          </v-row>
        </v-col>
      </span>

      <!-- UserName -->
      <span v-else>
        <v-col cols="4">
          {{ userName }}
        </v-col>
      </span>

      <v-col cols="3">
        <v-btn class="glassButton" small dark :color="color"
          >Copy <v-icon small class="pl-1">mdi-content-copy</v-icon></v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msgApp: String,
    userName: String,
    friendCode: String,
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
