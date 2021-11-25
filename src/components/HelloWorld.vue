<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12"> <JoshInfoCard /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import JoshInfoCard from './JoshInfoCard.vue'

export default {
  name: 'HelloWorld',
  components: { JoshInfoCard },
  data: () => ({})
}
</script>
