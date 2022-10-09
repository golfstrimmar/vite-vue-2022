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
import Artikel from './Artikel.vue';
import Possessive from './Possessive.vue';
import Personal from './Personal.vue';
import Reflexiv from './Reflexiv.vue';
import Modalverben from './Modalverben.vue';
import Zeigepronomen from './Zeigepronomen.vue';




export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    Dialog,
    Artikel,
    Possessive,
    Personal,
    Reflexiv,
    Modalverben,
    Zeigepronomen
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
    
    todosAkkusativ(todos) {
      const todosAkkusativ = this.todos.filter(item => {
        return item.category === 'Akkusativ' ? item : null
      })
      return todosAkkusativ
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
    todosDativ(todos) {
      const todosDativ = this.todos.filter(item => {
        return item.category === 'Dativ' ? item : null
      })
      return todosDativ
    },
    todosDatAkk(todos) {
      const todosDatAkk = this.todos.filter(item => {
        return item.category === 'DatAkk' ? item : null
      })
      return todosDatAkk
    },
    todosSome(todos) {
      const todosSome = this.todos.filter(item => {
        return item.category === 'Some' ? item : null
      })
      return todosSome
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
    <h2>das Wörterbuch</h2>

    <!-- <div class="">
    <div  class="Wörterbuch-bunner bg-blue-grey-3">
      Dativ
    </div>
    <q-tooltip>
      I am groot!
    </q-tooltip>
    </div> -->

    <!-- <div class="inline bg-blue-grey-3 rounded-borders cursor-pointer" style="max-width: 100px">
  <div class=" flex flex-center text-center  q-pa-sm">
    Dativ
  </div>

  <q-tooltip anchor="center right" self="center middle">
    I am groot!
  </q-tooltip> -->
    <!-- </div> -->

    <ul class="cheaps">
        <li class="cheap">
        <span>Genitiv</span>
        <div class="cheap-tool">
          = Genitiv = <br>
          welcher? ( какой?, который?) <br>
          wessen? (чей? чья? чье?)
        </div>
      </li>  
      <li class="cheap">
        <span>Akkusativ</span>
        <div class="cheap-tool">
          = Akkusativ = <br>
          wen? (кого?)<br>
          was? (что?) <br>
          wohin? (куда?).
        </div>
      </li>
       <li class="cheap">
        <span>Dativ</span>
        <div class="cheap-tool">
          = Dativ = <br>
          wo? ( где? )<br>
          wem? ( кому?)<br>
          mit wem? ( с кем?)<br>
          womit? ( чем?) <br>
          wann? (когда?)<br>
          woher? ( откуда?)
        </div>
      </li> 
      <li class="cheap">
        <span>Nominativ</span>
        <div class="cheap-tool">
          = Nominativ = <br>
          wer? (кто?) <br>
          was? (что?)
        </div>
      </li>  
    </ul>


    <div class="Swipers">
      <!-- <div class="Swipers-item" v-if="todosFamilie.length > 0">
        <h3 class="Swipers-item--text text-h5 text-center">Familie</h3>
        <swiper class="swiper " :modules="modules" :effect="'cards'" :grab-cursor="true">
          <swiper-slide v-for="todo in todosFamilie" :key="todo.id"
            :class="[todo.done ? 'success-light slide-indigo-3': 'slide-indigo-3']" class="slide">
            <img :src="todo.url" />
            <div class=" slide-footer ">
              <div class="slide-title ">{{todo.category}}</div> 
              <Dialog class="myDialog" :title="todo.content" :translation="todo.translation"></Dialog>
              <q-btn class="" round color="red" @click="deliteToDo(todo.id)" icon="cancel" /> 
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
              <div class="slide-title ">{{todo.category}}</div> 
            <Dialog class="myDialog" :title="todo.content" :translation="todo.translation"></Dialog>
              <q-btn class="" round color="red" @click="deliteToDo(todo.id)" icon="cancel" />
         </div>
          </swiper-slide>
        </swiper>
      </div>-->


      <div class="Swipers-item" v-if="todosDativ.length > 0">
        <h3>Предлоги, которые всегда & Dativ </h3>
        <ul class="Dativ-spans">
          <span>ab</span>&nbsp;
          <span>aus</span>&nbsp;
          <span>außer</span>&nbsp;
          <span>bei</span>&nbsp;
          <span>entgegen</span>&nbsp;
          <span>gegenüber</span>&nbsp;
          <span>mit</span>&nbsp;
          <span>nach</span>&nbsp;
          <span>seit</span>&nbsp;
          <span>von</span>&nbsp;
          <span>zu</span>
        </ul>
        <swiper class="swiper " :modules="modules" :effect="'cards'" :grab-cursor="true">
          <swiper-slide v-for="todo in todosDativ" :key="todo.id"
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
      <div class="Swipers-item" v-if="todosAkkusativ.length > 0">
        <h3>Предлоги, которые всегда & Akkusativ</h3>
        <ul class="Dativ-spans">
          <span>bis</span>&nbsp;
          <span>durch</span>&nbsp;
          <span>entlang</span>&nbsp;
          <span>gegen</span>&nbsp;
          <span>für</span>&nbsp;
          <span>ohne</span>&nbsp;
          <span>um</span>&nbsp;
        </ul>
        <swiper class="swiper " :modules="modules" :effect="'cards'" :grab-cursor="true">
          <swiper-slide v-for="todo in todosAkkusativ" :key="todo.id"
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
      <div class="Swipers-item" v-if="todosDatAkk.length > 0">
        <h3>Предлоги, которые и & Akkusativ и & Dativ</h3>
        <ul class="Dativ-spans">
          <span>an</span>&nbsp;
          <span>auf</span>&nbsp;
          <span>in</span>&nbsp;
          <span>vor</span>&nbsp;
          <span>hinter</span>&nbsp;
          <span>Über</span>&nbsp;
          <span>Unter</span>&nbsp;
          <span>Neben</span>&nbsp;
          <span>Zwischen</span>&nbsp;
        </ul>
        <swiper class="swiper " :modules="modules" :effect="'cards'" :grab-cursor="true">
          <swiper-slide v-for="todo in todosDatAkk" :key="todo.id"
            :class="[todo.done ? 'green-2 slide-light-blue-3': 'slide-light-blue-3']"
            class="slide justify-center items-center row ">
            <div class="text-h4">{{todo.content}}</div>

            <div class=" slide-footer  ">
              <!-- <div class="slide-title ">{{todo.category}}</div> -->
              <Dialog class="myDialog" :title="todo.content" :translation="todo.translation" :category="todo.category">
              </Dialog>
              <!-- <q-btn class="" round color="red" @click="deliteToDo(todo.id)" icon="cancel" />-->
            </div>
          </swiper-slide>
        </swiper>
      </div>

     

      <div class="Swipers-item" v-if="todosFrage.length > 0">
        <h3>Вопросительные слова.неизменяемые </h3>
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
        <h3>Вопросительные слова.изменяемые </h3>
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

        <h3>Die unregelmäßigen verben</h3>
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
      <div class="Swipers-item" v-if="todosKurz.length > 0">
        <h3>Adverbien usw.</h3>
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
    </div>
    <!-- ====================== -->
    <Artikel></Artikel>
    <!-- ====================== -->
    <Personal></Personal>
    <!-- ====================== -->
    <Reflexiv></Reflexiv>
    <!-- ====================== -->
    <Zeigepronomen></Zeigepronomen>
    <!-- ====================== -->
    <Possessive></Possessive>
  <!-- ====================== -->
    <Modalverben></Modalverben>
    <!-- ====================== -->
    <!-- <div class="Swipers-item" v-if="todosDativ.length > 0">
      <h3>Modalverben</h3>
      <swiper class="swiper swiper--Some" :modules="modules" :effect="'cards'" :grab-cursor="true">
        <swiper-slide v-for="todo in todosSome" :key="todo.id"
          :class="[todo.done ? 'green-2 slide-light-blue-3': 'slide-light-blue-3']"
          class="slide justify-center items-center row ">
          <div class="text-h4">{{todo.content}}</div>

          <div class=" slide-footer  ">
             <div class="slide-title ">{{todo.category}}</div> 
            <Dialog class="myDialog"  :translation="todo.translation" :category="todo.category">
            </Dialog>
             <q-btn class="" round color="red" @click="deliteToDo(todo.id)" icon="cancel" />  
          </div>
        </swiper-slide>
      </swiper>
    </div> -->
  </main>
</template>


<style lang="scss" >
// @import '@/styles/variables.scss';
// @import '@/styles/mixins.scss';
// @import './style.scss';

.flip-example {
  position: relative;
}

.cheaps {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  display: inline-flex;
  gap: 10px;
  position: fixed;
  z-index: 100;
  top: 200px;
  left: -120px;
  transform: rotate(-90deg);
}

.cheaps * {
  list-style: none;
}
.cheap-tool {
  position: absolute;
  transform: translateY(-200px) rotate(90deg);
  background: $blue-grey-5;
  color: white;
  border-radius: 8px;
  padding: 10px;
  font-size: 20px;
  white-space: nowrap;
  text-align: center;
  opacity: 0;
  z-index: -200;
  transition: all .3s;
  width: 350px;
}
.cheap {
  background: $grey-1;
  position: relative;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;
  color: $blue-grey-5;
  
&:hover > .cheap-tool{
  opacity: 1;
  transform: translateY(200px) rotate(90deg) !important;
}
}



.tabl {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  gap: 30px 10px;
  margin: 0 0 20px 0;

  &__item {

    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(4px);
    border-radius: 15px;
    padding: 5px;

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


h2 {
  text-shadow: 0 0 5px #ffca28;
  text-align: center;
}

h3 {
  font-size: 28px !important;
  text-align: center;
  text-shadow: 0 0 5px $amber-6;
  line-height: 1.1 !important;
  margin: 5px 0;
}

h4 {
  font-size: 15px !important;
  line-height: 1.1 !important;
  font-weight: 700 !important;
  color: $red-8
}

h6 {
  text-shadow: 0 0 5px $red-6;
  margin: 10px 0;
  text-align: center;
}

.Dativ-spans {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  color: $red-6;
  font-weight: 800;
}

@media (min-width: 768px) and (max-width: 1199px) {
  .tabl {
    grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  }
}

.Wörterbuch-bunner {
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
}


.Swipers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px 30px;
  padding: 0 0 30px 0;
}


.swiper {
  max-width: 300px;
  height: 150px;
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

.swiper--Some {
  max-width: 10000px;
  width: 100%;
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