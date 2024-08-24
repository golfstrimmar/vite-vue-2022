# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

// ----------pinia----------------
// import { useTaskArtikle } from "@/store/taskStore"
// const stateArtikle = useTaskArtikle();
// var Rubriks = reactive([])
// Rubriks = stateArtikle.Artikle

// --------------------------
(v-for="el in item.content" :key="index")

@input='HendleEventInput()'  
@focus="focusHandler()"  
@blur="blurHandler()"  
:class="[(inputValue == Antwort) ? '_is-active' : '_is-falsch',(focused == true) ? '_is-light' : '' ]"
v-if="Antwort !== undefined"

input(type='text' v-model.trim='inputValue' ref="some" :class="[(focused == true) ? '_is-light' : '']" @focus="focusHandler" @input="$emit('update:inputValue', $event.target.value)" @Vertig="$emit('Vertig', inputValue)" )

          //- .auth-items

//- //- router-link(to="/signup" v-if="!isLoggedIn" ) SignUp
//- //- router-link(to="/signin" v-if="!isLoggedIn" ) SignIn
//- Button(type='text' text='Sign out' @someEvent="handleSignOut" v-if="isLoggedIn" )
//- .\_user(v-if="isLoggedIn" )
//- span User info
//- p {{ taskStore.name }}

========

1. делаем pinia/authent
1. делаем firebase.js
1. делаем компонент регистрации
1. при регистрации в firebase/auth заносятся данне полей
1. делаем компонент логин
1. при логине собираем данные полей формы и отправляем на firebase/auth если пользователь авторизован, то его данные мержатся в firebase/firestore. если это новый пользователь, то просто заносятся первичные данные. если уже он работал на сайте, то на базе ничего не поменяется.
1. на логине берется обратно эти данные из firebase/firestore и уже теперь все данные пользователя заходят на pinia.

1. дальше пользователь работает на сайте и через  
   refresh(Name, Data) {
   this.user[Name] = Data;
   },
   меняет что-то на pinia. теперь pinia лежит то-же пользователь , но с обновленными данными.

например можно по этому условию что-то показывать для авторизованных пользователей, а что-то скрывать
--pinia
getters: {
isAuthenticated: (state) => !!state.user,
},
--на компоненте
import { useAuthStore } from '../store/authent';
const AuthStore = useAuthStore();
a( href="#!" @click='AuthStore.logout()' v-if="AuthStore.isAuthenticated") Logout

или вывести поля юзера
--на компоненте
import { useAuthStore } from '../store/authent';
const AuthStore = useAuthStore();
p.willkommen(v-if="AuthStore.user !== null ") Willkommen, {{ AuthStore.user.name}}

или добавить какое-то поле юзеру через одну из actions
--на компоненте
import { useAuthStore } from '@/store/authent';
const AuthStore = useAuthStore();
AuthStore.refresh('Artikle', formattedTime)
--pinia
refresh(Name, Data) {
const date = new Date();
const formattedDate = date.toLocaleString();
this.user[Name].push({ zeit: formattedDate, stoppuhr: Data });
},

6. при logout весь обновленный юзер отправляется на firebase/firestore , pinia - обнуляется.

======== firebase

import { getAuth} from "firebase/auth";
import { db } from "@/firebase/config.ts";
const auth = getAuth();

import {
getFirestore,
doc,
setDoc,
getDoc,
onSnapshot,
} from "firebase/firestore";

=========== pinia

import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();

====== login
login(userData) {
this.user = userData;
},

=== на компонентах === logout (берет все данные юзера с pinia и засылает на firebase. это обновленные данные )

import { useAuthStore } from '../store/authent';
const AuthStore = useAuthStore();

a( href="#!" @click='AuthStore.logout()' v-if="AuthStore.isAuthenticated") Logout

====== собственно logout на pinia
logout() {

      const saveUserData = async (uid, data) => {
        try {
          await setDoc(doc(db, "users", uid), data, { merge: true });
          console.log("User data saved!");
        } catch (error) {
          console.error("Error saving user data:", error);
        }
      };
      saveUserData(this.user.uid, this.user);

      signOut(auth)
        .then(() => {
          this.user = null;
        })
        .catch((error) => {
          console.error("Ошибка при выходе:", error);
        });
    },
