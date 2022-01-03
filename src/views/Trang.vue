<template>
  <div>
    <div class="backgroundT" height="100%"></div>
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
  name: 'Trang',

  components: {
    Home,
    NavBar
  },
  data() {
    return {
      user: {
        name: 'Trang',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/super-effective-eea44.appspot.com/o/IMG_3172.jpg?alt=media&token=50ee9840-127f-4926-9e45-c807683b2fd7',
        // picture: 'https://firebasestorage.googleapis.com/v0/b/super-effective-eea44.appspot.com/o/IMG_2632.jpeg?alt=media&token=20606aa0-4d33-41ed-bdf5-6da68e2e5b01',
        apps: [
          {
            msgApp: 'Discord',
            icon: 'mdi-discord',
            color: '#5865F2',

            userName: 'Trang#7712',
            link: 'https://discordapp.com/users/82136879096410112'
          },
          {
            msgApp: 'Telegram',
            icon: 'mdi-send',
            color: '#1D9FDF',

            userName: 'itstrang',
            link: 'https://t.me/itstrang'
          },
          {
            msgApp: 'Messenger',
            icon: 'mdi-facebook-messenger',
            color: '#006AFF',

            userName: 'trangnguyen1803',
            link: 'https://m.me/trangnguyen1803'
          },
          {
            msgApp: 'Instagram',
            icon: 'mdi-instagram',
            color: '#E1306C',

            userName: 'trang102_',
            link: 'https://www.instagram.com/trang102_'
          },
          {
            msgApp: 'Facebook',
            icon: 'fab fa-facebook',
            color: '#0470E5',

            userName: 'Trang Nguyen',
            link: 'https://www.facebook.com/trangnguyen1803/'
          },
          {
            msgApp: 'Twitter',
            icon: 'mdi-twitter',
            color: '#1D9BF0',

            userName: 'quynhtranghbt',
            link: 'https://twitter.com/quynhtranghbt'
          },
          {
            msgApp: 'Linkedin',
            icon: 'mdi-linkedin',
            color: '#0A66C2',

            userName: 'Trang Nguyen',
            link: 'https://www.linkedin.com/in/trang-nguyen-202'
          },
          {
            msgApp: 'TikTok',
            icon: 'fab fa-tiktok',
            color: '#000000',

            userName: 'itstrangg',
            link: 'https://www.tiktok.com/@itstrangg?lang=en'
          }
        ],
        payments: [
          {
            msgApp: 'Venmo',
            icon: 'mdi-credit-card-outline',
            color: '#3396CD',

            userName: 'Trang-Nguyen-183',
            link: 'https://venmo.com/code?user_id=2003272562900992908'
          }
        ],
        games: [
          {
            msgApp: 'Pokemon Go',
            icon: 'mdi-pokemon-go',
            color: '#E04A2D',

            userName: 'Trang102',
            friendCode: '288512142611',
            link: 'https://venmo.com/code?user_id=2003272562900992908'
          },
          {
            msgApp: 'Pikmin Bloom',
            icon: 'mdi-flower-poppy',
            color: '#27D687',

            userName: 'trang',
            friendCode: '427089604319',
            link: 'https://venmo.com/code?user_id=2003272562900992908'
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss">
.backgroundT {
  background-image: linear-gradient(to top, #e59cd4, #c2e59c);
  position: fixed;
  // background-image: url('https://pokemon.originalstitch.com/en/img/pattern_all/194.jpg'); e59cd4
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
