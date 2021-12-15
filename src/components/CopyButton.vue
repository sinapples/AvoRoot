<template>
  <v-row>
    <v-col cols="12">
      <v-tooltip v-model="show" top>
        <template v-slot:activator="{ show, attrs }">
          <v-btn
            v-if="!isClicked"
            v-bind="attrs"
            dark
            open-on-click
            :open-on-hover="false"
            dense
            block
            :color="color"
            v-on="show"
            @click.stop.prevent="onClick()"
          >
            <v-icon class="pr-2">{{ icon }}</v-icon> {{ msgApp }}
          </v-btn>

          <!-- :href="link" -->
          <v-btn
            v-else
            dark
            dense
            block
            :color="color"
            @click.stop.prevent="onClick()"
          >
            <v-icon class="pr-2">{{ icon }}</v-icon> Tap again to open
            {{ msgApp }}
          </v-btn>
        </template>
        <span>Copied {{ userName }}</span>
      </v-tooltip>

      <!-- <v-btn dark dense :color="color" :href="link">
        <v-icon class="pr-2">{{ icon }}</v-icon> {{ msgApp }}
      </v-btn>
      {{ userName }}
      <v-btn @click.stop.prevent="copyUsername()"> Copy</v-btn>
      <input id="testing-code" type="hidden" :value="userName" /> -->
      <input id="testing-code" type="hidden" readonly :value="userName" />
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
    return {
      isClicked: false,
      show: false
    }
  },
  methods: {
    onClick() {
      this.isClicked = !this.isClicked
      this.show = !this.show
      if (this.isClicked) {
        this.copyUsername()
      } else {
        window.open(this.link, '_blank')
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
