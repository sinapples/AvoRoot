<template>
  <div class="page-wrapper">
    <v-row class="pt-5" no-gutters justify="center">
      <UserCard :name="user.name" :picture="user.picture" />
    </v-row>

    <v-card-title class="mb-4">
      Messaging Apps
    </v-card-title>

    <div class="cardContainer">
      <v-row justify="center">
        <span v-for="item in user.apps" :key="item">
          <AppCard
            :msg-app="item.msgApp"
            :icon="item.icon"
            :color="item.color"
            :glass-color="glassColor"
            :user-name="item.userName"
            :link="item.link"
            :text-color="item.textColor"
          />
        </span>
      </v-row>
    </div>

    <v-card-title class="mb-4">
      Payment Apps
    </v-card-title>

    <div class="cardContainer">
      <v-row justify="center">
        <span v-for="item in user.payments" :key="item">
          <AppCard
            :msg-app="item.msgApp"
            :icon="item.icon"
            :color="item.color"
            :glass-color="glassColor"
            :user-name="item.userName"
            :link="item.link"
            :text-color="item.textColor"
          />
        </span>
      </v-row>
    </div>

    <v-card-title class="mb-4">
      Games
    </v-card-title>

    <v-row justify="space-around" align-content="center" dense>
      <v-col v-for="item in user.games" :key="item" cols="11">
        <AppBarCard
          :msg-app="item.msgApp"
          :icon="item.icon"
          :color="item.color"
          :glass-color="glassColor"
          :user-name="item.userName"
          :link="item.link"
          :friend-code="item.friendCode"
        />
      </v-col>
    </v-row>

    <v-container> </v-container>
  </div>
</template>

<script>
import UserCard from '../components/UserCard'
import AppCard from '../components/AppCard'
import AppBarCard from '../components/AppBarCard'

export default {
  name: 'Home',

  components: {
    UserCard,
    AppCard,
    AppBarCard
  },
  props: {
    user: Object
  },
  data() {
    return {}
  }
}
</script>
