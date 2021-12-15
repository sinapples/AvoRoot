<template>
  <v-row>
    <v-col cols="12">
      <v-btn dark dense block :color="color" :href="link">
        <v-icon class="pr-2">{{ icon }}</v-icon> {{ msgApp }}
      </v-btn>
      <!-- <v-btn dark dense :color="color" :href="link">
        <v-icon class="pr-2">{{ icon }}</v-icon> {{ msgApp }}
      </v-btn>
      {{ userName }}
      <v-btn @click.stop.prevent="copyUsername()"> Copy</v-btn>
      <input id="testing-code" type="hidden" :value="userName" /> -->
      <input id="moo" type="hidden" :value="userName" />
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msgApp: String,
    userName: String,
    color: String,
    link: String,
    icon: String
  },
  data() {
    return { moo: `testing-codes${this.msgApp}` }
  },
  methods: {
    onClick() {
      this.copyUsername()

      window.open(this.link, '_blank')
    },
    copyUsername() {
      const usernameToCopy = document.querySelector(
        `#testing-code${this.msgApp}`
      )
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
