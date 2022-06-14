<template>
<!--  <div>-->
<!--    <v-app-bar-->
<!--        color="white"-->
<!--        elevation="0"-->
<!--    >-->
<!--      <v-spacer></v-spacer>-->
<!--      <v-toolbar-title>Mine</v-toolbar-title>-->
<!--      <v-spacer></v-spacer>-->
<!--      <a href="/login">登录</a>-->
<!--    </v-app-bar>-->
<!--  </div>-->
  <v-app :dark="setTheme">
    <v-app-bar
        app
        elevation="0">
      <v-btn
          icon
          href="https://github.com/Marionette-yixuan/ThingManagement"
          target="_blank"
          rel="noopener noreferrer"
      >
        <v-icon color="blue darken-2">mdi-vuejs </v-icon>
      </v-btn>
      <v-btn
          icon
          href="https://github.com/Marionette-yixuan/ThingManagement"
          target="_blank"
          rel="noopener noreferrer"
      >
        <v-icon color="blue darken-2">mdi-github</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        <span>MINE </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
          icon
          href="/login"
          target="_blank"
      >登录
      </v-btn>
      <v-btn
          icon
          href="/"
          target="_blank"
      >我的
      </v-btn>
      <v-btn fab text @click="ActivateLightTheme = !ActivateLightTheme">
        <v-icon :color="`${!ActivateLightTheme && 'yellow'}`" :light="true"
        >mdi-brightness-4</v-icon
        >
      </v-btn>
    </v-app-bar>

  </v-app>
</template>
<script>
import colors from 'vuetify/lib/util/colors'
export default {
  name:'TopNavigation',
  data: () => ({
    ActivateLightTheme: true,
  }),
  computed: {
    setTheme() {
      if (this.ActivateLightTheme == true) {
        return (this.$vuetify.theme.dark = false);
      } else {
        return (this.$vuetify.theme.dark = true);
      }
    }
  }
}
</script>
<style scoped>

.something {
  color: #3f51b5;
  background-color:#b0bec5;
}
</style>
