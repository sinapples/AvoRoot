<template>
  <v-card height="62" class="glass d-flex  align-center  " @click="onClick">
    <span class="pl-3">
      <v-avatar class="glassAvatar" :color="color" size="48">
        <v-icon color="white">{{ icon }}</v-icon>
      </v-avatar>
    </span>
    <span>
      <span>
        <span class="   pl-4">{{ msgApp }}</span>
        <div class=" body-2 pl-4">
          {{ friendCode ? friendCode : userName }}
        </div>
      </span>
    </span>

    <v-spacer />
    <v-btn
      class="glassButton mr-2"
      small
      dark
      :color="color"
      @click.stop="onClick"
    >
      <span v-if="copiedMsg">
        Copied
      </span>

      <span v-else>
        Copy
      </span>
      <v-icon small class="pl-1 ">mdi-content-copy</v-icon></v-btn
    >
    <input
      :id="elementID"
      type="hidden"
      readonly
      :value="friendCode ? friendCode : userName"
    />
  </v-card>
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
    onClick() {
      this.isClicked = !this.isClicked
      this.timer()
      this.show = !this.show
      if (this.isClicked) {
        this.copyUsername()
      } else {
        // window.open(this.link, '_blank')
      }
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
