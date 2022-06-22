<template>
  <v-app>
<nav>
    <!--侧边导航-->
      <v-navigation-drawer v-model="drawer" app mini-variant-width="74">
        <v-list nav class="py-0">
          <v-list-item style="margin-top: 8px">
            <v-list-item-avatar size="45">
              <img src="../assets/image/good_logo.png"/>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">MINE</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
<!--        <v-divider></v-divider>-->
        <v-list style="margin-top: 10px" nav>
          <v-list-item-group color="primary">
            <v-list-item v-for="menu in menus" :key="menu.title" :href="menu.link" :to="menu.link" link>
            <v-list-item-icon>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </v-list-item-group>
        </v-list>

      </v-navigation-drawer>
    <!--顶部导航-->
      <v-app-bar app elevation="0" :dark="setTheme">
        <v-app-bar-nav-icon @click="drawer = !drawer" color="light"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>

        <v-btn fab text @click="ActivateLightTheme = !ActivateLightTheme">
          <v-icon :color="`${!ActivateLightTheme && 'yellow'}`" :light="true">mdi-brightness-4</v-icon>
        </v-btn>

        <v-btn icon href="https://github.com/Florence-l/ThingManagement-ui" target="_blank" rel="noopener noreferrer">
          <v-icon color="blue darken-2">mdi-vuejs </v-icon>
        </v-btn>

        <v-btn icon href="https://github.com/Marionette-yixuan/ThingManagement" target="_blank" rel="noopener noreferrer">
          <v-icon color="blue darken-2">mdi-github</v-icon>
        </v-btn>

        <v-btn icon href="/login" target="_blank">登录
        </v-btn>

        <v-menu min-width="180" offset-y bottom left nudge-bottom="10">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mr-0" icon v-bind="attrs" v-on="on" color="light">
              我的
            </v-btn>
          </template>
          <v-list>
            <div class="text-h5 grey--text text--darken-3 px-4 pt-4">Flora</div>
            <div class="subtitle-2 primary--text font-weight-regular px-4">1070@qq.com</div>
            <v-list-item-group color="primary">
              <v-list-item
                  v-for="(item, i) in items"
                  :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <div class="d-flex justify-center my-3">
              <v-btn width="80%" large outlined color="primary" class="text-capitalize" @click="logOut">退出
              </v-btn>
            </div>
          </v-list>
        </v-menu>
      </v-app-bar>
<!--    <v-main >-->
<!--    </v-main>-->

</nav>
  <v-main>
    <router-view />
  </v-main>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    drawer: null,
    ActivateLightTheme: true,
    items: [
      { title: '我的物品' },
      { title: '个人信息' },
    ],
    menus: [
      { title: '我的物品', icon: 'mdi-home-outline' ,link:'/myitem'},
      { title: '添加物品', icon: 'mdi-plus-circle-multiple-outline',link:'/add' },
      { title: '数据统计', icon: 'mdi-chart-line',link:'/count' },
      { title: '即将到期', icon: 'mdi-clipboard-text-clock-outline',link:'/due'},
    ],

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
.content {
  background-color: #EBECF0;
}
</style>
