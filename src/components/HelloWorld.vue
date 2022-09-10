<template>
  <q-toolbar class="bg-blue-grey-6 text-white shadow-2 rounded-borders">
    <q-btn flat label="Homepage" />
    <q-space />
  
    <!--
          notice shrink property since we are placing it
          as child of QToolbar
        -->
    <q-tabs v-model="tab" shrink>
      <q-tab name="tab1" label="Tab 1" />
      <q-tab name="tab2" label="Tab 2" />
      <q-tab name="tab3" label="Tab 3" />
      <q-tab name="tab4" label="Tab 4" />
      <q-tab name="tab5" label="Tab 5" />
    </q-tabs>
  </q-toolbar>  
  <div class="q-pa-md">
    <q-btn-dropdown color="primary" label="Dropdown Button">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
  <div class="q-pa-md q-gutter-y-md column items-start">
    <q-btn-group push>
      <q-btn push label="First" icon="timeline" />
      <q-btn push label="Second" icon="visibility" />
      <q-btn push label="Third" icon="update" />
    </q-btn-group>

    <q-btn-group push>
      <q-btn color="yellow" glossy text-color="black" push label="First" icon="verified_user" />
      <q-btn color="amber" glossy text-color="black" push label="Second" />
      <q-btn color="orange" glossy text-color="black" push label="Third" />
    </q-btn-group>

    <q-btn-group outline>
      <q-btn outline color="brown" label="First" />
      <q-btn outline color="brown" label="Second" icon-right="watch_later" />
      <q-btn outline color="brown" label="Third" />
    </q-btn-group>

    <q-btn-group>
      <q-btn color="secondary" glossy label="First" />
      <q-btn color="secondary" glossy label="Second" />
      <q-btn color="secondary" glossy label="Third" />
      <q-btn color="secondary" glossy label="Fourth" />
    </q-btn-group>

    <q-btn-group>
      <q-btn color="accent" icon="timeline" />
      <q-btn color="accent" icon="visibility" />
      <q-btn color="accent" icon="update" />
    </q-btn-group>

    <q-btn-group rounded>
      <q-btn color="amber" rounded glossy icon="timeline" />
      <q-btn color="amber" rounded glossy icon="visibility" />
      <q-btn color="amber" rounded glossy icon-right="update" label="Update" />
    </q-btn-group>
  </div>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-parallax src="https://cdn.quasar.dev/img/parallax1.jpg" :height="150" />

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
    </q-card>
  </div>
  <div class="q-pa-md">
   
      <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated
        control-color="white" navigation padding arrows height="300px"  infinite
        class="bg-primary text-white shadow-1 rounded-borders">
       
         <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn v-if="active" size="lg" icon="home" color="green" flat round dense @click="onClick" />
          <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
        </template>

        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
<div class="q-pa-md q-gutter-sm">
  <q-btn label="Carousel" color="primary" @click="carousel = true" />
  <q-btn label="Card" color="primary" @click="card = true" />
  <q-btn label="Sliders" color="primary" @click="sliders = true" />

  <q-dialog v-model="carousel">
    <q-carousel transition-prev="slide-right" transition-next="slide-left" swipeable animated v-model="slide"
      control-color="primary" navigation-icon="radio_button_unchecked" navigation padding height="200px"
      class="bg-white shadow-1 rounded-borders">
      <q-carousel-slide :name="1" class="column no-wrap flex-center">
        <q-icon name="style" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap flex-center">
        <q-icon name="live_tv" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap flex-center">
        <q-icon name="layers" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap flex-center">
        <q-icon name="terrain" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-dialog>

  <q-dialog v-model="card">
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

      <q-card-section>
        <q-btn fab color="primary" icon="place" class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);" />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Cafe Basilico
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            250 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          $・Italian, Cafe
        </div>
        <div class="text-caption text-grey">
          Small plates, salads & sandwiches in an intimate setting.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn v-close-popup flat color="primary" label="Reserve" />
        <q-btn v-close-popup flat color="primary" round icon="event" />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="sliders">
    <q-card style="width: 300px" class="q-px-sm q-pb-md">
      <q-card-section>
        <div class="text-h6">Volumes</div>
      </q-card-section>

      <q-item-label header>Media volume</q-item-label>
      <q-item dense>
        <q-item-section avatar>
          <q-icon name="volume_up" />
        </q-item-section>
        <q-item-section>
          <q-slider color="teal" v-model="slideVol" :step="0" />
        </q-item-section>
      </q-item>

      <q-item-label header>Alarm volume</q-item-label>
      <q-item dense>
        <q-item-section avatar>
          <q-icon name="alarm" />
        </q-item-section>
        <q-item-section>
          <q-slider color="teal" v-model="slideAlarm" :step="0" />
        </q-item-section>
      </q-item>

      <q-item-label header>Ring volume</q-item-label>
      <q-item dense>
        <q-item-section avatar>
          <q-icon name="vibration" />
        </q-item-section>
        <q-item-section>
          <q-slider color="teal" v-model="slideVibration" :step="0" />
        </q-item-section>
      </q-item>
    </q-card>
  </q-dialog>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
        carousel: ref(false),
        card: ref(false),
        sliders: ref(false),

        slide: ref(1),
        lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',

        stars: ref(3),

        slideVol: ref(39),
        slideAlarm: ref(56),
        slideVibration: ref(63)
      }
  }
}


</script>
<style>
.q-toolbar{
}
</style>
