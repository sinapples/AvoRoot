<template>
  <v-card
    width="115px"
    class=" ml-3 mb-3 glass text-center"
    dense
    @click="onClick"
  >
    <div class="pa-1  justify-center">{{ msgApp }}</div>
    <v-avatar class="glassAvatar" :color="color" size="48">
      <v-icon :color="iconColor()">{{ icon }}</v-icon>
    </v-avatar>
    <v-card-text class="pa-1 ">
      <span v-if="copiedMsg">
        Copied
      </span>

      <span
        v-else
        class="d-inline-block text-truncate"
        style="max-width: 100px;"
      >
        {{ userName }}
        <v-icon small class="pl-1">mdi-content-copy</v-icon>
      </span>
    </v-card-text>
    <v-card-actions class="pa-0 ma-0">
      <v-btn
        class="glassButton"
        tile
        block
        small
        :dark="buttonColor()"
        :color="color"
        @click.stop="openApp"
        >Open App</v-btn
      >
    </v-card-actions>
    <input :id="elementID" type="hidden" readonly :value="userName" />
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
    icon: String,
    textColor: String
  },
  data() {
    return {
      isClicked: false,
      show: false,
      cs: 'rgba( 0, 0, 0, 0.75 )',
      copiedMsg: false
    }
  },
  computed: {
    elementID() {
      let id = this.msgApp.replace(/\s/g, '-')
      id += `-${this.userName.replace('#', '-')}`
      return id
    }
  },
  methods: {
    timer() {
      this.copiedMsg = true
      setInterval(() => {
        this.copiedMsg = false
      }, 3000)
    },
    buttonColor() {
      return !this.textColor
    },
    iconColor() {
      return this.textColor ? this.textColor : 'white'
    },
    onClick() {
      this.timer()

      this.copyUsername()
    },
    openApp() {
      window.open(this.link, '_blank')
    },
    copyUsername() {
      const usernameToCopy = document.querySelector(`#${this.elementID}`)
      usernameToCopy.setAttribute('type', 'text')
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

<style scoped>
.v-icon.outlined {
  border: 1px solid black;
  border-radius: 50%;
  height: 56px;
  width: 56px;
}
</style>
