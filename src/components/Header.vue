<template lang="pug">
header.header
  .container
    .header__body
      .logo 
        router-link(to="/")
          SvgIcon(name='flag-for-germany-svgrepo-com' )
          SvgIcon(name='vite' )
          SvgIcon(name='vue' )
          SvgIcon(name='pinia' )
          //- SvgIcon(name='quasar-logo' )
          SvgIcon(name='pug' )
          SvgIcon(name='sass' )
      //- transition(mode='easy-in-out' name='f'  )
      //-   .header-links(v-if="Lg || burgerActive" )
      //-     router-link(v-for="link in links" :key="link.name" :to="link.href" @click='clickBurger')
      //-       |{{ link.name }}
      //-     .auth-items
      //-       router-link(to="/signup"  v-if="!isLoggedIn" @click='clickBurger') SignUp
      //-       router-link(to="/signin"  v-if="!isLoggedIn" @click='clickBurger') SignIn
      //-       Button(type='text' text='Sign out' @someEvent="handleSignOut"  v-if="isLoggedIn" @click='clickBurger') 
      //-       ._user(v-if="isLoggedIn" )
      //-         span Kontoinformationen
      //-         p {{ taskStore.name }}
      .abschnitte
        button(type="button"  @click='menuActiveFunction') {{menuActive}}
        transition(mode='easy-in-out' name='lgf'  )
          .header-links(v-if="Lg &&  menuActive")
            router-link(v-for="link in links" :key="link.name" :to="link.href" @click='clickBurger')
              |{{ link.name }}
            .auth-items
              router-link(to="/signup"  v-if="!isLoggedIn" @click='clickBurger') SignUp
              router-link(to="/signin"  v-if="!isLoggedIn" @click='clickBurger') SignIn
              Button(type='text' text='Sign out' @someEvent="handleSignOut"  v-if="isLoggedIn" @click='clickBurger') 
              ._user(v-if="isLoggedIn" )
                span Kontoinformationen
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

const menuActiveFunction = () => {
  // if (window.innerWidth >= 1200) {
  // Lg.value = true
  menuActive.value = !menuActive.value;
  // }
}



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
  { name: "Tasks", href: "/tasks" },
  // { name: "SignIn", href: "/signin" },
]);

var burgerActive = ref(false);
var menuActive = ref(false);
var Lg = ref(false);
let auth;
var userEmail = ref('');
const isLoggedIn = ref(false)



onMounted(() => {
  if (window.innerWidth >= 1200) {
    Lg.value = true
    burgerActive.value = false
  } else {
    Lg.value = false
  }
  window.addEventListener("resize", handleWindowSizeChange);
  window.addEventListener("scroll", handleWindowScroll);
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

const handleWindowScroll = () => {
  const header = document.querySelector('.header')
  if (window.pageYOffset > 60) {
    header.classList.add("responciveHeader");
  } else {
    header.classList.remove("responciveHeader");
  }
};

// const clickBurger = () => {
//   if (window.innerWidth <= 1200) {
//     burgerActive.value = !burgerActive.value;
//     if (burgerActive.value) {
//       document.querySelector('body').classList.add("lock")
//     } else {
//       document.querySelector('body').classList.remove("lock")
//     }
//   }

// }

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
.lgf-enter-from {
  transition: 2s all;
  transform: scaleY(0);
  transform-origin: top;
}

// .v-enter-active,
.lgf-enter-to {
  transition: 2s all;
  transform: scaleY(1);
  transform-origin: top;
}

.lgf-leave-from {
  transition: 2s all;
}

.lgf-leave-to {
  transition: 2s all;
  transform: scaleY(0);
  transform-origin: top;
}





.header {
  @include transition;
  position: fixed;
  width: 100%;
  top: 0;
  background: $light-blue-9;
  padding: 10px 0;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0) 51%, rgba(0, 0, 0, 0.3)) !important;
  z-index: 20000;

  svg {
    width: 30px;
    height: 30px;
    margin: 0 10px 0 0;
  }

  ._burger {
    z-index: 20000;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    display: block;
    @include transition;

    &:hover {
      background-color: #e0e0e06e;
    }

    span {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &::after {
      top: 20%;
      left: 50%;
      transform: translate(-50%, 50%);
    }

    &::before {
      bottom: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    span,
    &::after,
    &::before {
      background: $grey-3;
      width: 18px;
      height: 2px;

    }

    &._is-active {

      span,
      &::after,
      &::before {
        background: $grey-3;
      }

      // &:hover span,
      // &:hover::after,
      // &:hover::before {
      //   background-color: rgb(138, 138, 138);
      // }

      &::after {
        top: 46%;
        left: 21.5%;
        transform: rotate(40deg);
      }

      &::before {
        bottom: 48%;
        left: 21.5%;
        transform: rotate(-40deg);
      }
    }
  }
}

.logo {
  display: inline-block;
  padding: 5px;
  @include transition;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e06e;
  }
}

.header__body {
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 20px;
  align-items: center;
}

.abschnitte {
  padding: 0 20px;
  position: relative;

  button {
    z-index: 4;
    position: relative;
  }


  .header-links {
    display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(max-content, 10px));
    grid-template-columns: 1fr;
    // align-items: center;
    // column-gap: 20px;
    position: absolute;
    background: $light-blue-8;
    // left: 0px;
    // padding: 0 10px 5px;
    z-index: 2;

    a {
      white-space: nowrap;
      line-height: 1.8;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid $blue-1;
      }
    }

    .router-link-active {
      color: $deep-orange-4;
      border-bottom: 1px solid $deep-orange-4;

      &:hover {
        border-bottom: 1px solid $deep-orange-4;
      }
    }
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
    line-height: 1.8;
    border-bottom: 1px solid transparent;

    &.router-link-active {
      &:hover {
        color: $deep-orange-4;
        border-bottom: 1px solid $deep-orange-4;
      }
    }

    &:hover {
      color: $blue-1;
      line-height: 1.8;
      border-bottom: 1px solid $blue-1;
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

.responciveHeader {
  // height: 50px;
  padding: 3px 0;
  backdrop-filter: blur(15px);

  @include transition;
}

@media (max-width: 1200px) {
  .f-enter-from {
    transition: .2s all;
    transform: translateX(-100vw);
  }

  // .v-enter-active,
  .f-enter-to {
    transition: .2s all;
    transform: translateX(0);
  }

  .f-leave-from {
    transition: .2s all;
    transform: translateX(0);
  }

  .f-leave-to {
    transition: .2s all;
    transform: translateX(-100vw);
  }

  .header__body {
    display: inline-block;
  }

  .header-links {
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

  .header-links {
    a {
      border-bottom: none;

      &:hover {
        border-bottom: none;
      }
    }

    .router-link-active {
      border-bottom: none;

      &:hover {
        border-bottom: none;
      }
    }
  }

  .header {
    a {
      margin: 0;
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


  }


}
</style>
