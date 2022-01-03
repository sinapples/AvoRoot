<template>
  <div>
    <div class="backgroundJ" height="100%"></div>
    <NavBar />

    <v-main>
      <router-view />
      <Home :user="user" />
    </v-main>
  </div>
</template>

<script>
import Home from '../components/Home'
import NavBar from '../components/NavBar'

export default {
  name: 'Josh',

  components: {
    Home,
    NavBar
  },
  data() {
    return {
      user: {
        name: 'Josh',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/super-effective-eea44.appspot.com/o/photo-squashed.JPG?alt=media&token=b55d8a0c-bacf-40df-901c-c084a183ced0',

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
            color: '#1D9FDF',

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
            msgApp: 'Line',
            icon: 'fab fa-line',
            color: '#00B900',

            userName: 'sinapples',
            link: 'https://line.me/ti/p/ZwsOTp_fe4'
          },
          {
            msgApp: 'Instagram',
            icon: 'mdi-instagram',
            color: '#E1306C',

            userName: 'sinapples',
            link: 'https://www.instagram.com/sinapples'
          },
          {
            msgApp: 'Snapchat',
            icon: 'mdi-snapchat',
            color: '#F7F400',
            textColor: 'black',

            userName: 'sinapples',
            link:
              'https://www.snapchat.com/add/sinapples?share_id=MkEzMURF&locale=en_US'
          },
          {
            msgApp: 'Facebook',
            icon: 'fab fa-facebook',
            color: '#0470E5',

            userName: 'Josh Lopez',
            link: 'https://www.facebook.com/sinapples/'
          },
          {
            msgApp: 'Twitter',
            icon: 'mdi-twitter',
            color: '#1D9BF0',

            userName: '@sinapples',
            link: 'https://twitter.com/sinapples'
          },
          {
            msgApp: 'Linkedin',
            icon: 'mdi-linkedin',
            color: '#0A66C2',

            userName: 'Josh Lopez',
            link: 'https://www.linkedin.com/in/sinapples'
          },
          {
            msgApp: 'TikTok',
            icon: 'fab fa-tiktok',
            color: '#000000',

            userName: 'sinapples',
            link: 'https://www.tiktok.com/@sinapples?lang=en'
          }
        ],
        payments: [
          {
            msgApp: 'Venmo',
            icon: 'mdi-credit-card-outline',
            color: '#3396CD',

            userName: 'sinapples',
            link: 'https://venmo.com/code?user_id=2003272562900992908'
          },
          {
            msgApp: 'Paypal',
            icon: 'fab fa-paypal',
            color: '#00457C',

            userName: 'sinapples',
            link: 'https://www.paypal.me/sinapples?locale.x=en_US'
          },
          {
            msgApp: 'Buy Me Boba',
            icon: 'mdi-tea',
            color: '#FFDD00',
            textColor: 'black',
            userName: 'sinapples',
            link: 'https://www.buymeacoffee.com/sinapples'
          }
        ],
        games: [
          {
            msgApp: 'Pokemon Go',
            icon: 'mdi-pokemon-go',
            color: '#E04A2D',

            userName: 'Sinapples',
            friendCode: '323446415079',
            link: 'https://venmo.com/code?user_id=2003272562900992908'
          },
          {
            msgApp: 'Pikmin Bloom',
            icon: 'mdi-flower-poppy',
            color: '#27D687',

            userName: 'Sinapples',
            friendCode: '786811564299',
            link: 'https://venmo.com/code?user_id=2003272562900992908'
          },
          {
            msgApp: 'Switch',
            icon: 'mdi-nintendo-switch',
            color: '#E60012',

            userName: 'sinapples',
            friendCode: 'SW-8004-7191-8923',
            link: 'https://venmo.com/code?user_id=2003272562900992908'
          },
          {
            msgApp: 'Playstation Network',
            icon: 'mdi-sony-playstation',
            color: '#003087',

            userName: 'sinapples',

            link: 'https://venmo.com/code?user_id=2003272562900992908'
          },
          {
            msgApp: 'Xbox Live',
            icon: 'fab fa-xbox',
            color: '#107C10',

            userName: 'sinapples#6620'
          },
          {
            msgApp: 'MTG Arena',
            icon: 'mdi-cards-playing-outline',
            color: '#CD3021',

            userName: 'sinapples#48173'
          },
          {
            msgApp: 'Pokemon Unite',
            icon: 'mdi-pokeball',
            color: '#8446D1',

            userName: 'sinapples',
            friendCode: '64TY866'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.backgroundJ {
  background-image: linear-gradient(to top, #64b3f4, #c2e59c);
  position: fixed;
  // background-image: url('https://pokemon.originalstitch.com/en/img/pattern_all/194.jpg');
  // background-image: url('https://cdn.pixabay.com/photo/2017/10/10/09/44/the-background-2836575_960_720.jpg');
  // background-repeat: repeat;
  backdrop-filter: blur(4px) !important ;
  background-size: cover;
  background-attachment: fixed;
  // background-size: 100% 900px;
  width: 100%;
  height: 100%;
}
</style>
