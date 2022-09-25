<script setup>
import { ref } from "vue";

</script>


<template>
    <q-header reveal bordered class="bg-blue-grey-6  text-white" height-hint="98">
      <q-toolbar  >
            <q-avatar>
              <img src="./../assets/img/flag-for-germany-svgrepo-com.svg">
            </q-avatar>
            <q-space />
        <q-tabs align="left">
          <q-route-tab to="/" label="Heimat" />
          <q-route-tab to="/todo" label="Wörterbuch" />
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
