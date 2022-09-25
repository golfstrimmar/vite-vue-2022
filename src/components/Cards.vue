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
import Dialog from './Dialog.vue'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    Dialog
  },
  props: {
    todos: Array
  },
  methods: {
    deliteToDo(id) {
      this.$emit('deliteToDo', id)
    }
  },
  computed: {
    todosFamilie(todos) {
      const todosFamilie = this.todos.filter(item => {
        return item.category === 'Familie' ? item : null
      })
      return todosFamilie
    },
    todosKörperteile(todos) {
      const todosKörperteile = this.todos.filter(item => {
        return item.category === 'Körperteile' ? item : null
      })
      return todosKörperteile
    }
  },
  setup() {
    return {
      effect: "cards",
      modules: [Pagination, Navigation, EffectFlip, EffectCube, EffectCards],
      // cards_golova: [
      //   { id: 1, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_podborodok.png', title: 'Das Kinn', translation: ' Подбородок' },
      //   { id: 2, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_guby.png', title: 'Die Lippe', translation: 'Губа' },
      //   { id: 3, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_lob.png', title: 'Die Stirn', translation: 'Лоб' },
      //   { id: 4, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_zuby.png', title: 'Der Zahn', translation: 'Зуб' },
      //   { id: 5, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_sheya.png', title: 'Der Hals', translation: 'Шея' },
      //   { id: 6, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_volosy.png', title: 'Das Haar', translation: 'Волосы' },
      //   { id: 7, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_shcheki.png', title: 'Die Wange', translation: 'Щека' },
      //   { id: 8, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_cherep.png', title: 'Der Schädel', translation: 'Череп' },
      //   { id: 9, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_golova.png', title: 'Der Kopf', translation: 'Голова' },
      //   { id: 10, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_glaz.png', title: 'Das Auge', translation: 'Глаз' },
      //   { id: 11, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_nos.png', title: 'Die Nase', translation: 'Нос' },
      // ],
      // cards_semia: [
      //   { id: 1, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_babushka.png', title: 'Die Großmutter, Die Oma', translation: 'бабушка' },
      //   { id: 2, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_babushkadedushka.png', title: 'Die Großeltern', translation: 'бабушка и дедушки' },
      //   { id: 3, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_brat.png', title: 'Der Bruder', translation: 'брат' },
      //   { id: 4, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_vnuk.png', title: 'Der Enkel', translation: 'внук' },
      //   { id: 5, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_vnuchka.png', title: 'Die Enkelin', translation: 'внучка' },
      //   { id: 6, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_dedushka.png', title: 'Der Großvater, Der Oppa', translation: 'дедушка' },
      //   { id: 7, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_doch.png', title: 'Die Tochter', translation: 'дочь' },
      //   { id: 8, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_zhena.png', title: 'Die Ehefrau - супруга, жена; die Mutti - мама; die Mutter - мать', translation: 'Череп' },
      //   { id: 9, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_muzh.png', title: 'Der Ehemann- супруг, муж; der Vati - папа; der Vater - отец', translation: '' },
      //   { id: 10, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_semya.png', title: 'Die Familie', translation: 'семья' },
      //   { id: 11, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_sestra.png', title: 'Die Schwester', translation: 'сестра' },
      //   { id: 11, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_suprugi.png', title: 'Das Ehepaar', translation: 'супруги, супружеская чета, супружеская пара' },
      //   { id: 11, url: 'https://www.memorysecrets.ru/article/flashcards_pictures/images/de_syn.png', title: 'Der Sohn', translation: 'сын' },
      // ],
    }

  }
})

</script>


<template>
  <h3 class="text-h3  text-uppercase">das Wörterbuch</h3>
  <div class="Swipers">
    <div class="Swipers-item" v-if="todosFamilie.length > 0">
      <h3 class="text-h4">Familie</h3>
      <swiper class="swiper " :modules="modules" :effect="'cards'" :grab-cursor="true">
        <swiper-slide v-for="todo in todosFamilie" :key="todo.id" :class="{'success-light': todo.done}" class="slide">
          <img :src="todo.url" />
          <div class="row justify-between items-center slide-footer q-pr-sm q-pb-sm">
            <div class="slide-title ">{{todo.category}}</div>
            <Dialog class="myDialog" :title="todo.content" :translation="todo.translation"></Dialog>
            <q-btn class="" round color="red" @click="deliteToDo(todo.id)" icon="cancel" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="Swipers-item" v-if="todosKörperteile.length > 0">
      <h3 class="text-h4">Körperteile</h3>
      <swiper class="swiper " :modules="modules" :effect="'cards'" :grab-cursor="true">
        <swiper-slide v-for="todo in todosKörperteile" :key="todo.id" :class="{'success-light': todo.done}"
          class="slide">
          <img :src="todo.url" />
          <div class="row justify-between items-center slide-footer q-pr-sm q-pb-sm">
            <div class="slide-title ">{{todo.category}}</div>
            <Dialog class="myDialog" :title="todo.content" :translation="todo.translation"></Dialog>
            <q-btn class="" round color="red" @click="deliteToDo(todo.id)" icon="cancel" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>







<style lang="scss" scoped>
// @import '@/styles/variables.scss';
// @import '@/styles/mixins.scss';
// @import './style.scss';



.flip-example {
  position: relative;
}

.Swipers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px 30px;
}

.swiper {
  width: 400px;
  height: 300px;
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


    .myDialog {}
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

.slide-footer {
  position: absolute;
  background: rgba(92, 92, 92, 0.3);
  bottom: 5px;
  padding: 6px;
  right: 5px;
  left: auto;
  z-index: 5;
  border-radius: 10px;
  column-gap: 10px;
  color: $blue-grey-1;
}

.q-btn--round {
  border-radius: 50%;
  padding: 0;
  min-width: 2em;
  min-height: 2em;
}
</style>