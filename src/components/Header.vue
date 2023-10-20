<template lang="pug">
header.header
  .container
    .header__body
      .logo 
        router-link(to="/")
          SvgIcon(name='vite' )
          SvgIcon(name='vue' )
      transition(mode='easy-in-out' name='fade')
        .header-links( v-if="Lg || burgerActive" )
          router-link(v-for="link in links" :key="link.name" :to="link.href" @click='clickBurger')
            |{{ link.name }}
          .auth-items
            router-link(to="/signup" @click='clickBurger' v-if="!isLoggedIn") SignUp
            router-link(to="/signin" @click='clickBurger' v-if="!isLoggedIn") SignIn
            Button(type='text' text='Sign out' @someEvent="handleSignOut"  v-if="isLoggedIn") 
            ._user(v-if="isLoggedIn" )
              span Ihre E-Mail-Adresse
              p {{ taskStore.name }}
      ._burger( @click='clickBurger' :class="[burgerActive ? ' _is-active' : '']") 
        span

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Button from '@/components/Button.vue';
import { useRouter } from 'vue-router'
const router = useRouter();


import { useTaskStore } from "../store/taskStore"
const taskStore = useTaskStore();




const links = ref([
  { name: "Home", href: "/" },
  { name: "Artikel", href: "/artikel" },
  { name: "Personal", href: "/personal" },
  { name: "Interrogativ", href: "/interrogativ" },
  { name: "Reflexiv", href: "/reflexiv" },
  { name: "Possesiv", href: "/possesiv" },
  { name: "Zeige", href: "/zeigepron" },
  { name: "Modal", href: "/modal" },
  { name: "Passiv", href: "/passiv" },
  { name: "Konjunktiv-II", href: "/konjunktiv" },
  // { name: "Tasks", href: "/tasks" },
  // { name: "SignIn", href: "/signin" },
]);

var burgerActive = ref(false);
var Lg = ref(false);
let auth;
var userEmail = ref('');
const isLoggedIn = ref(false)



onMounted(() => {
  if (window.innerWidth >= 1200) {
    Lg.value = true
  } else {
    Lg.value = false
  }


  window.addEventListener("resize", handleWindowSizeChange);
  // handleWindowSizeChange();
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }

  })
});

const handleWindowSizeChange = () => {
  if (window.innerWidth >= 1200) {
    Lg.value = true
    burgerActive.value = false
  } else {
    Lg.value = false
  }
};

const clickBurger = () => {
  burgerActive.value = !burgerActive.value;
  if (burgerActive.value) {
    document.querySelector('body').classList.add("lock")
  } else {
    document.querySelector('body').classList.remove("lock")
  }
}

onUnmounted(() => {
  window.removeEventListener("resize", handleWindowSizeChange);
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}

</script>

<style lang="scss" scoped>
header {
  background: $indigo-8;
  padding: 10px 0;

  svg {
    width: 30px;
    height: 30px;
    margin: 0 10px 0 0;
  }

  ._burger {
    display: none;
  }
}

.header__body {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
}

.header-links {
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  .router-link-active {
    color: $deep-orange-4;
  }
}

.auth-items {
  justify-self: end;
  display: inline-flex;
  align-items: center;
  column-gap: 10px;
  row-gap: 10px;
  @include transition;

  a {
    color: $indigo-3;

    &:hover {
      color: $blue-1;
    }
  }
}

._user {
  span {
    font-size: 14px;
    color: $indigo-1;
  }

  p {
    color: $indigo-1;
    text-shadow: 0 0 5px $light-blue-1;
  }
}



@media (max-width: 1200px) {
  .fade-enter-from {
    transition: .2s all;
    transform: translateX(-100vw);
  }

  // .v-enter-active,
  .fade-enter-to {
    transform: translateX(0);
  }

  .fade-leave-from {
    transition: .2s all;
    transform: translateX(0);
  }

  .fade-leave-to {
    transform: translateX(-100vw);
  }


  .header-links {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    gap: 20px 0;
    width: 100vw;
    max-height: 100vh;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 100px 40px 40px 40px;
    overflow: auto;
    text-align: right;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(15px);
    z-index: 1000;
    align-items: top;

  }

  header {
    a {
      margin: 0;
    }

    ._burger {
      z-index: 10001;
      width: 20px;
      height: 16px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0px;
      display: block;

      span,
      &::after,
      &::before {
        background: $grey-3;
        width: 20px;
        height: 2px;
      }

      &._is-active {

        span,
        &::after,
        &::before {
          background: $grey-3;
        }

        &:hover span,
        &:hover::after,
        &:hover::before {
          background-color: rgb(138, 138, 138);
        }
      }
    }
  }

  .auth-items {
    justify-self: end;
    display: inline-flex;
    flex-direction: column;
    align-items: end;
    column-gap: 10px;
    row-gap: 10px;
    @include transition;
    margin: 40px 0 0 0;

    a {
      color: $indigo-3;

      &:hover {
        color: $blue-1;
      }
    }
  }
}
</style>
