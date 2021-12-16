<template>
  <div>
    <UserCard />

    <v-container>
      <v-row class="text-center" dense justify="space-around">
        <v-col>
          <AppCard
            msg-app="Discord"
            icon="mdi-discord"
            color="#5865F2"
            user-name="sinap#3816"
            link="https://discordapp.com/users/82136879096410112"
          />
        </v-col>
        <v-col>
          <AppCard
            msg-app="Telegram"
            icon="mdi-send"
            color="#1B9EDE"
            user-name="sinapples"
            glass-color="rgba(188, 101, 242, 0.25)"
            link="https://t.me/sinapples"
          />
        </v-col>
        <v-col>
          <AppCard
            msg-app="Discord"
            icon="mdi-discord"
            color="#5865F2"
            user-name="sinap#3816"
            link="https://discordapp.com/users/82136879096410112"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-card color="secondary px-0" dark tile>
      <v-sheet color="primary  ">
        <v-card-title class="justify-center text-h7  white--text">
          <div class="justify-center">
            <span class="justify-center line mr-2">Hi I'm Josh! </span>
          </div>
        </v-card-title>
      </v-sheet>

      <v-card-text class=" body-1 text-center px-0 mb-0">
        <v-container class="px-0">
          <v-row align="center" justify="center" no-gutters>
            <v-spacer />

            <v-col cols="auto">
              <v-list-item-avatar class="ma-3" size="125" right rounded>
                <v-img
                  src="https://firebasestorage.googleapis.com/v0/b/super-effective-eea44.appspot.com/o/photo-squashed.JPG?alt=media&token=b55d8a0c-bacf-40df-901c-c084a183ced0"
                ></v-img>
              </v-list-item-avatar>
            </v-col>
            <v-col>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-start text-h6 mb-2">
                    Nice to meet you!
                  </v-list-item-title>
                  <div class=" text-start  body-2">
                    What's your preferred message app?
                  </div>
                  <div class=" pt-2 text-start  body-2">
                    Tap on the buttons below to add me.
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-col>

            <v-spacer />
          </v-row>
        </v-container>
      </v-card-text>

      <!-- buttons -->

      <v-card-actions>
        <v-row dense justify="center">
          <v-col cols="12"> </v-col>
          <v-col cols="12">
            <CopyButton
              msg-app="discord"
              icon="mdi-discord"
              color="#5865F2"
              user-name="sinap#3816"
              link="https://discordapp.com/users/82136879096410112"
            />
          </v-col>
          <v-col cols="12">
            <LinkButton
              msg-app="Telegram"
              icon="mdi-send"
              color="#1B9EDE"
              user-name="sinapples"
              link="https://t.me/sinapples"
            />
          </v-col>
          <v-col cols="12">
            <LinkButton
              msg-app="Facebook Messenger"
              icon="mdi-facebook-messenger"
              color="#006AFF"
              user-name="sinapples"
              link="https://m.me/sinapples"
            />
          </v-col>
          <v-col cols="12">
            <LinkButton
              msg-app="Instagram"
              icon="mdi-instagram"
              color="#E1306C"
              user-name="sinapples"
              link="https://www.instagram.com/sinapples"
            />
          </v-col>
          <v-col cols="12">
            <LinkButton
              msg-app="Venmo"
              icon="mdi-credit-card-outline"
              color="#3396CD"
              user-name="sinapples"
              link="https://venmo.com/code?user_id=2003272562900992908"
            />
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import LinkButton from './LinkButton.vue'
import CopyButton from './CopyButton.vue'
import AppCard from './AppCard.vue'
import UserCard from './UserCard.vue'

export default {
  name: 'JoshInfoCard',
  components: { LinkButton, CopyButton, AppCard, UserCard },

  data() {
    return {
      testingCode: '1234',
      justify: [
        'space-around',
        'center',
        'end',
        'space-around',
        'space-between'
      ]
    }
  },
  methods: {}
}
</script>
