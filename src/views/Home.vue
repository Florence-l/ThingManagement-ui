<template>
  <v-app class="back">
    <TopNavigation/>
  </v-app>
</template>

<script>
import TopNavigation from '@/components/TopNavigation.vue'

export default {
  name: 'Home',
  components: {
    TopNavigation
  }
}
</script>
<style scoped>
.back{
 background-color: #EBECF0
}
</style>
