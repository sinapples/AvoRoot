<template>
  <div class="page-wrapper">
    <v-row class="pt-5" no-gutters justify="center">
      <UserCard />
    </v-row>

    <v-card-title>
      Messenger Apps
    </v-card-title>

    <v-row justify="space-around" align-content="center">
      <v-col v-for="item in apps" :key="item" cols="5" md="2" sm="3" lg="2">
        <AppCard
          :msg-app="item.msgApp"
          :icon="item.icon"
          :color="item.color"
          :glass-color="glassColor"
          :user-name="item.userName"
          :link="item.link"
        />
      </v-col>
    </v-row>
    <v-card-title>
      Payment Apps
    </v-card-title>

    <v-row justify="space-around" align-content="center">
      <v-col v-for="item in payments" :key="item" cols="5" md="2" sm="3" lg="2">
        <AppCard
          :msg-app="item.msgApp"
          :icon="item.icon"
          :color="item.color"
          :glass-color="glassColor"
          :user-name="item.userName"
          :link="item.link"
        />
      </v-col>
    </v-row>

    <v-container> </v-container>
  </div>
</template>

<script>
import UserCard from '../components/UserCard'
import AppCard from '../components/AppCard'

export default {
  name: 'Home',

  components: {
    UserCard,
    AppCard
  },
  data() {
    return {
      apps: [
        {
          msgApp: 'Discord',
          icon: 'mdi-discord',
          color: '#5865F2',

          userName: 'sinap#3816',
          link: 'https://discordapp.com/users/82136879096410112'
        },
        {
          msgApp: 'Telegram',
          icon: 'mdi-send',
          color: '#1B9EDE',

          userName: '@sinapples',
          link: 'https://t.me/sinapples'
        },
        {
          msgApp: 'Messenger',
          icon: 'mdi-facebook-messenger',
          color: '#006AFF',

          userName: 'sinapples',
          link: 'https://m.me/sinapples'
        },
        {
          msgApp: 'Instagram',
          icon: 'mdi-instagram',
          color: '#E1306C',

          userName: 'sinapples',
          link: 'https://www.instagram.com/sinapples'
        }
      ],
      payments: [
        {
          msgApp: 'Venmo',
          icon: 'mdi-credit-card-outline',
          color: '#3396CD',

          userName: 'sinapples',
          link: 'https://venmo.com/code?user_id=2003272562900992908'
        }
      ]
    }
  }
}
</script>
