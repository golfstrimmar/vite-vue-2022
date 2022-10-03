<script >
import { defineComponent } from 'vue'
// import { Pagination, Navigation, EffectFlip, EffectCube, EffectCards } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
// import 'swiper/css/effect-flip'
// import 'swiper/css/effect-cube'
import 'swiper/css/effect-cards'
import Dialog from './Dialog.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCards } from 'swiper'




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
  setup() {
    return {
      // effect: "cards",

      // modules: [Pagination, Navigation, EffectFlip, EffectCube, EffectCards],
      modules: [EffectCards],
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

  },
  computed: {
    todosFamilie(todos) {
      const todosFamilie = this.todos.filter(item => {
        return item.category === 'Familie' ? item : null
      })
      return todosFamilie
    },
    todosKopf(todos) {
      const todosKopf = this.todos.filter(item => {
        return item.category === 'Kopf' ? item : null
      })
      return todosKopf
    },
    todosKurz(todos) {
      const todosKurz = this.todos.filter(item => {
        return item.category === 'Kurz' ? item : null
      })
      return todosKurz
    },
    todosOrtesWo(todos) {
      const todosOrtesWo = this.todos.filter(item => {
        return item.category === 'OrtesWo' ? item : null
      })
      return todosOrtesWo
    },
    todosWohinAkkusativ(todos) {
      const todosWohinAkkusativ = this.todos.filter(item => {
        return item.category === 'WohinAkkusativ' ? item : null
      })
      return todosWohinAkkusativ
    },
    todosFrage(todos) {
      const todosFrage = this.todos.filter(item => {
        return item.category === 'Frage' ? item : null
      })
      return todosFrage
    },
    todosFrageÄnderbar(todos) {
      const todosFrageÄnderbar = this.todos.filter(item => {
        return item.category === 'FrageÄnderbar' ? item : null
      })
      return todosFrageÄnderbar
    },
    todosVerben(todos) {
      const todosVerben = this.todos.filter(item => {
        return item.category === 'Verben' ? item : null
      })
      return todosVerben
    },
    todosmännlichNominative(todos) {
      const todosmännlichNominative = this.todos.filter(item => {
        return item.category === 'männlichNominative' ? item : null
      })
      return todosmännlichNominative
    }
  },

})

</script>


<template>
  <main>
    <h3 class="text-h3  text-uppercase text-center">das Wörterbuch</h3>
    <div class="Swipers">
      <div class="Swipers-item" v-if="todosFamilie.length > 0">
        <h3 class="Swipers-item--text text-h5 text-center">Familie</h3>
        <swiper class="swiper " :modules="modules" :effect="'cards'" :grab-cursor="true">
          <swiper-slide v-for="todo in todosFamilie" :key="todo.id"
            :class="[todo.done ? 'success-light slide-indigo-3': 'slide-indigo-3']" class="slide">
            <img :src="todo.url" />
            <div class=" slide-footer ">
              <!-- <div class="slide-title ">{{todo.category}}</div> -->
              <Dialog class="myDialog" :title="todo.content" :translation="todo.translation"></Dialog>
              <!-- <q-btn class="" round color="red" @click="deliteToDo(todo.id)" icon="cancel" /> -->
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="Swipers-item" v-if="todosKopf.length > 0">
        <h3 class="Swipers-item--text text-h5 text-center">Kopf</h3>
        <swiper class="swiper " :modules="modules" :effect="'cards'" :grab-cursor="true">
          <swiper-slide v-for="todo in todosKopf" :key="todo.id"
            :class="[todo.done ? 'green-2 slide-green-2': 'slide-green-2']" class="slide">
            <img :src="todo.url" />
            <div class=" slide-footer">
              <!--  <div class="slide-title ">{{todo.category}}</div> -->
              <Dialog class="myDialog" :title="todo.content" :translation="todo.translation"></Dialog>
              <!--  <q-btn class="" round color="red" @click="deliteToDo(todo.id)" icon="cancel" /> -->
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="Swipers-item" v-if="todosKurz.length > 0">
        <h3 class="Swipers-item--text text-h5 text-center">Adverbien usw.</h3>
        <swiper class="swiper " :modules="modules" :effect="'cards'" :grab-cursor="true">
          <swiper-slide v-for="todo in todosKurz" :key="todo.id"
            :class="[todo.done ? 'green-2 slide-light-blue-3': 'slide-light-blue-3']"
            class="slide justify-center items-center row ">
            <div class="text-h4">{{todo.content}}</div>

            <div class=" slide-footer  ">
              <!-- <div class="slide-title ">{{todo.category}}</div> -->
              <Dialog class="myDialog" :title="todo.content" :translation="todo.translation" :category="todo.category">
              </Dialog>
              <!-- <q-btn class="" round color="red" @click="deliteToDo(todo.id)" icon="cancel" /> -->
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="Swipers-item" v-if="todosOrtesWo.length > 0">
        <h3 class="Swipers-item--text text-h5  text-center">Предлоги, которые отвечают на вопрос wo?</h3>
        <swiper class="swiper " :modules="modules" :effect="'cards'" :grab-cursor="true">
          <swiper-slide v-for="todo in todosOrtesWo" :key="todo.id"
            :class="[todo.done ? 'green-2 slide-light-blue-3': 'slide-light-blue-3']"
            class="slide justify-center items-center row ">
            <div class="text-h4">{{todo.content}}</div>

            <div class=" slide-footer  ">
              <!-- <div class="slide-title ">{{todo.category}}</div> -->
              <Dialog class="myDialog" :title="todo.content" :translation="todo.translation" :category="todo.category">
              </Dialog>
              <!-- <q-btn class="" round color="red" @click="deliteToDo(todo.id)" icon="cancel" /> -->
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="Swipers-item" v-if="todosWohinAkkusativ.length > 0">
        <h3 class="Swipers-item--text text-h5 text-center">Предлоги движения = Wohin & Akkusativ</h3>
        <swiper class="swiper " :modules="modules" :effect="'cards'" :grab-cursor="true">
          <swiper-slide v-for="todo in todosWohinAkkusativ" :key="todo.id"
            :class="[todo.done ? 'green-2 slide-light-blue-3': 'slide-light-blue-3']"
            class="slide justify-center items-center row ">
            <div class="text-h4">{{todo.content}}</div>

            <div class=" slide-footer  ">
              <!-- <div class="slide-title ">{{todo.category}}</div> -->
              <Dialog class="myDialog" :title="todo.content" :translation="todo.translation" :category="todo.category">
              </Dialog>
              <!-- <q-btn class="" round color="red" @click="deliteToDo(todo.id)" icon="cancel" /> -->
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="Swipers-item" v-if="todosFrage.length > 0">
        <h3 class="Swipers-item--text text-h5 text-center">Вопросительные слова.неизменяемые </h3>
        <swiper class="swiper " :modules="modules" :effect="'cards'" :grab-cursor="true">
          <swiper-slide v-for="todo in todosFrage" :key="todo.id"
            :class="[todo.done ? 'green-2 slide-light-blue-3': 'slide-light-blue-3']"
            class="slide justify-center items-center row ">
            <div class="text-h4">{{todo.content}}</div>

            <div class=" slide-footer  ">
              <!-- <div class="slide-title ">{{todo.category}}</div> -->
              <Dialog class="myDialog" :title="todo.content" :translation="todo.translation" :category="todo.category">
              </Dialog>
              <!-- <q-btn class="" round color="red" @click="deliteToDo(todo.id)" icon="cancel" /> -->
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="Swipers-item" v-if="todosFrageÄnderbar.length > 0">
        <h3 class="Swipers-item--text text-h5 text-center">Вопросительные слова.изменяемые </h3>
        <swiper class="swiper " :modules="modules" :effect="'cards'" :grab-cursor="true">
          <swiper-slide v-for="todo in todosFrageÄnderbar" :key="todo.id"
            :class="[todo.done ? 'green-2 slide-light-blue-3': 'slide-light-blue-3']"
            class="slide justify-center items-center row ">
            <div class="text-h4">{{todo.content}}</div>

            <div class=" slide-footer  ">
              <!-- <div class="slide-title ">{{todo.category}}</div> -->
              <Dialog class="myDialog" :title="todo.content" :translation="todo.translation" :category="todo.category">
              </Dialog>
              <!-- <q-btn class="" round color="red" @click="deliteToDo(todo.id)" icon="cancel" /> -->
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="Swipers-item" v-if="todosVerben.length > 0">

        <h3 class="Swipers-item--text text-h5 text-center">Die unregelmäßigen verben</h3>
        <swiper class="swiper " :modules="modules" :effect="'cards'" :grab-cursor="true">
          <swiper-slide v-for="todo in todosVerben" :key="todo.id"
            :class="[todo.done ? 'green-2 slide-light-blue-3': 'slide-light-blue-3']"
            class="slide justify-center items-center row ">
            <div class="text-h4">{{todo.content}}</div>

            <div class=" slide-footer  ">
              <!-- <div class="slide-title ">{{todo.category}}</div> -->
              <Dialog class="myDialog" :translation="todo.translation" :category="todo.category"></Dialog>
              <!-- <q-btn class="" round color="red" @click="deliteToDo(todo.id)" icon="cancel" /> -->
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>


    <h3 class="text-h3  text-uppercase text-center">Склонение личных местоимений </h3>

    <div class="text-h4">Singular</div>
    <div class="tabl">
      <div class="tabl__item">
        <div class="text-h5">Nominativ</div>
        <p><span class="red-12">ich </span>winke — я машу </p>
        <p><span class="red-12">du </span>winkst — ты машешь </p>
        <p><span class="red-12">er </span>winkt — он машет </p>
        <p><span class="red-12">sie </span>winkt — она машет </p>
        <p><span class="red-12">es </span>winkt — оно машет </p>
      </div>
      <div class="tabl__item">
        <div class="text-h5">Dativ</div>
        <p>es scheint<span class="red-12"> mir </span> — мне кажется </p>
        <p>es scheint<span class="red-12"> dir </span> — тебе кажется </p>
        <p>es scheint<span class="red-12"> ihm </span> — ему кажется </p>
        <p>es scheint<span class="red-12"> ihr </span> — ей кажется </p>
        оно
        <p>es scheint<span class="red-12"> ihm </span> — ему кажется </p>
      </div>
      <div class="tabl__item">
        <div class="text-h5">Akkusativ</div>
        <p>sie beschimpft <span class="red-12"> mich </span> — она ругает меня </p>
        <p>sie beschimpft<span class="red-12"> dich </span> — она ругает тебя </p>
        <p>sie beschimpft<span class="red-12"> ihn </span> — она ругает его </p>
        <p>sie beschimpft<span class="red-12"> sie </span> — она ругает ее </p>
        оно
        <p>sie beschimpft<span class="red-12"> es </span> — она ругает его </p>
      </div>
      <div class="tabl__item">
        <div class="text-h5">Genitiv</div>
        <p>sie beschimpft <span class="red-12">meiner</span> — моего </p>
        <p>sie beschimpft<span class="red-12"> deiner </span> — твоего </p>
        <p>sie beschimpft<span class="red-12"> seiner </span> — его </p>
        <p>sie beschimpft<span class="red-12"> ihrer </span> — ее </p>
        оно
        <p>sie beschimpft<span class="red-12"> seiner </span> — его </p>
      </div>
    </div>
    <div class="text-h4">Plural</div>
    <div class="tabl">
      <div class="tabl__item">
        <div class="text-h5">Nominativ</div>
        <p><span class="red-12">wir </span> nähen — мы шьем</p>
        <p><span class="red-12">ihr  </span>näht — вы шьете </p>
        <p><span class="red-12">sie </span>nähen — они шьют </p>
        <p><span class="red-12">Sie </span>nähen — Вы шьете </p>
      </div>
      <div class="tabl__item">
        <div class="text-h5">Dativ</div>
        <p>es scheint<span class="red-12"> uns </span> — нам кажется</p>
        <p>es scheint<span class="red-12"> euch </span> — вам кажется </p>
        <p>es scheint<span class="red-12"> ihnen </span> — им кажется </p>
        <p>es scheint<span class="red-12"> Ihnen </span> — Вам кажется </p>
      </div>
      <div class="tabl__item">
        <div class="text-h5">Akkusativ</div>
        <p>sie retten  <span class="red-12"> uns </span> — они спасают нас </p>
        <p>wir retten<span class="red-12"> euch </span> — мы спасаем вас </p>
        <p>sie retten<span class="red-12"> sie </span> — они спасают их </p>
        <p>wir retten <span class="red-12"> Sie </span> — мы спасаем Вас </p>
      </div>
      <div class="tabl__item">
        <div class="text-h5">Genitiv</div>
        <p>sie beschimpft <span class="red-12">unser</span> — нашего </p>
        <p>sie beschimpft<span class="red-12"> eurer </span> — вашего </p>
        <p>sie beschimpft<span class="red-12"> ihrer </span> — их </p>
        <p>sie beschimpft<span class="red-12"> Ihrer </span> — Вашего </p>
      </div>
    </div>



  </main>
</template>


<style lang="scss" scoped>
// @import '@/styles/variables.scss';
// @import '@/styles/mixins.scss';
// @import './style.scss';

.flip-example {
  position: relative;
}

h3 {
  text-shadow: 0 0 5px $amber-6;
}

.tabl {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  gap: 10px;
margin: 0 0 20px 0;
  &__item {
    p {
      margin: 0 0 0 0;
      padding: 0 0 0 0;
      font-size: 18px;
    }

    .red-12 {
      color: $red-12;

    }

  }
}
@media (min-width: 768px) and (max-width: 1199px) {
    .tabl {
grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
    } 
}




.Swipers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px 30px;
  padding: 0 0 30px 0;
}


.swiper {
  max-width: 300px;
  height: 300px;
  box-sizing: content-box;
  display: flex;
  margin-top: auto;

  .slide {
    border-radius: 10px;
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
  display: block;
  width: calc(100% - 10px);
  background: rgba(92, 92, 92, 0.5);
  bottom: 5px;
  right: auto;
  left: 50%;
  transform: translate(-50%);
  z-index: 5;
  margin: 0;
  border-radius: 10px;
  column-gap: 10px;
  color: $blue-grey-1;
}


.slide-green-2 {
  background: $green-2;
  box-shadow: inset 0 0 40px white;
}

.slide-indigo-3 {
  background: $indigo-3;
  box-shadow: inset 0 0 40px white;
}

.slide-light-blue-3 {
  background: $lime-3;
  box-shadow: inset 0 0 40px white;
}

.swiper-slide .text-h4 {
  text-shadow: 0 0 2px rgb(235, 235, 235);
}

.Swipers-item {
  display: flex;
  flex-direction: column;
}

.Swipers-item--text {
  text-shadow: 0 0 3px $amber-5;
}

@media (max-width: 767px) {
  .Swipers[data-v-98ff395f] {
    grid-template-columns: 1fr;
    grid-gap: 20px 30px;
  }

  .tabl {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    justify-items: center;
text-align: center;
    &__item {
      p {
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        font-size: 18px;
      }

      .red-12 {
        color: $red-12;

      }

    }
  }

  h3 {
    font-size: 20px;
  }

  .Swipers-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .swiper {
    max-width: 215px;
    height: 215px;
    box-sizing: content-box;
    display: flex;
    margin-top: auto;
    width: 100%;
  }

  .text-h4 {
    text-align: center;
  }
}
</style>