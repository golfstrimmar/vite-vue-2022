<script >
import { ref } from "vue";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
    return { user: store.state.user }
  }
}


</script>


<template>
  <q-header reveal bordered class="bg-brown-5  text-white" height-hint="98">
    <q-toolbar>
      <q-avatar>
        <img src="./../assets/img/flag-for-germany-svgrepo-com.svg">
      </q-avatar>
      <q-space />
      <q-tabs align="left">
        <q-route-tab to="/" label="Startseite" />
        <q-route-tab to="/artikel " label="Artikel" />
        <q-route-tab to="/todo" label="Wörterbuch" />
        <q-route-tab to="/NewWordForm" label="Neue Wortform" v-if="$store.state.user" />
        <q-route-tab to="/Login" label="Login" v-if="!$store.state.user" />
        <q-route-tab @click="$store.dispatch('logout')" v-if="$store.state.user">Logout</q-route-tab>
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>


<style lang="scss" scoped>
.q-btn {
  min-height: 50px;
  height: 100% !important;
}
</style>
