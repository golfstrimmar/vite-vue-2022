

<script >
import { defineComponent } from 'vue'
import { Pagination, Navigation, EffectFlip, EffectCube, EffectCards } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
import 'swiper/css/effect-flip'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-cards'
import Dialog from '../components/Dialog.vue'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    Dialog
  },
  setup() {
    return {
      effect: "cards",
      modules: [Pagination, Navigation, EffectFlip, EffectCube, EffectCards],
      cards_golova: [
        { id: 1, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_podborodok.png', title: 'Das Kinn', translation: ' Подбородок' },
        { id: 2, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_guby.png', title: 'Die Lippe', translation: 'Губа' },
        { id: 3, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_lob.png', title: 'Die Stirn', translation: 'Лоб' },
        { id: 4, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_zuby.png', title: 'Der Zahn', translation: 'Зуб' },
        { id: 5, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_sheya.png', title: 'Der Hals', translation: 'Шея' },
        { id: 6, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_volosy.png', title: 'Das Haar', translation: 'Волосы' },
        { id: 7, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_shcheki.png', title: 'Die Wange', translation: 'Щека' },
        { id: 8, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_cherep.png', title: 'Der Schädel', translation: 'Череп' },
        { id: 9, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_golova.png', title: 'Der Kopf', translation: 'Голова' },
        { id: 10, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_glaz.png', title: 'Das Auge', translation: 'Глаз' },
        { id: 11, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_nos.png', title: 'Die Nase', translation: 'Нос' },
      ],
      cards_semia: [
        { id: 1, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_babushka.png', title: 'Die Großmutter, Die Oma', translation: 'бабушка' },
        { id: 2, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_babushkadedushka.png', title: 'Die Großeltern', translation: 'бабушка и дедушки' },
        { id: 3, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_brat.png', title: 'Der Bruder', translation: 'брат' },
        { id: 4, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_vnuk.png', title: 'Der Enkel', translation: 'внук' },
        { id: 5, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_vnuchka.png', title: 'Die Enkelin', translation: 'внучка' },
        { id: 6, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_dedushka.png', title: 'Der Großvater, Der Oppa', translation: 'дедушка' },
        { id: 7, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_doch.png', title: 'Die Tochter', translation: 'дочь' },
        { id: 8, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_zhena.png', title: 'Die Ehefrau - супруга, жена; die Mutti - мама; die Mutter - мать', translation: 'Череп' },
        { id: 9, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_muzh.png', title: 'Der Ehemann- супруг, муж; der Vati - папа; der Vater - отец', translation: '' },
        { id: 10, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_semya.png', title: 'Die Familie', translation: 'семья' },
        { id: 11, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_sestra.png', title: 'Die Schwester', translation: 'сестра' },
        { id: 11, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_suprugi.png', title: 'Das Ehepaar', translation: 'супруги, супружеская чета, супружеская пара' },
        { id: 11, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_syn.png', title: 'Der Sohn', translation: 'сын' },
      ],
    }
  }
})
</script>


<template>
  <h3 class="text-h3  text-uppercase">cards</h3>
  <div class="Swipers">
    
    <swiper class="swiper" :modules="modules" :effect="'cards'" :grab-cursor="true">
      <swiper-slide v-for="card in cards_golova" :key="card.id" class="slide">
        <img :src="`${card.url}`" />
        <Dialog class="myDialog" :title="card.title" :translation="card.translation"></Dialog>
      </swiper-slide>
    </swiper>
    <swiper class="swiper swiper--semia" :modules="modules" :effect="'cards'" :grab-cursor="true">
      <swiper-slide v-for="card in cards_semia" :key="card.id" class="slide slide--semia">
        <img :src="`${card.url}`" />
        <Dialog class="myDialog" :title="card.title" :translation="card.translation"></Dialog>
      </swiper-slide>
    </swiper>
  </div>
</template>







<style lang="scss" scoped>
// @import '@/styles/variables.scss';
// @import '@/styles/mixins.scss';
// @import './style.scss';



.flip-example {
  position: relative;
}
.Swipers{
  display: grid;
  grid-template-columns: repeat(2, max-content);
}
.swiper {
  width: 300px;
  height: 300px;
  padding: 50px;
  box-sizing: content-box;

  .slide {
    background: $indigo-1;

    border-radius: 10px;
    box-shadow: inset 0 0 20px $indigo-5;
    position: relative;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }


    .myDialog {
        position: absolute !important;
          bottom: 0 !important;
          right: 0 !important;
          left: auto !important;
          z-index: 5 !important;
    }
  }

  &--semia {
    width: 400px;
    height: 300px;
  }

  .slide--semia {

    img {
      display: block;
      object-fit: cover;
    }
  }
}
</style>