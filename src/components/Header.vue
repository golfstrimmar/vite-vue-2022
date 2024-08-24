<template lang="pug">
header.header
  .container
    .header__body
      .logo 
        router-link(to="/")
          SvgIcon(name='flag' )

      .header__auth
        router-link.willkommen(to="/privat" v-if="AuthStore.user !== null ")  {{ AuthStore.user.name}}
        router-link(to="/login" v-if="!AuthStore.isAuthenticated") Login
        a( href="#!" @click='LogoutHandler' v-if="AuthStore.isAuthenticated") Logout
      transition(mode='easy-in-out' name='f'  )
        .header__links(v-if=" burgerActive" )
          router-link(v-for="link in links" :key="link.name" :to="link.href" @click='clickBurger')
            |{{ link.name }}

      ._burger( @click='clickBurger' :class="[burgerActive ? ' _is-active' : '']") 
        span
        

</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'
import { useRouter } from 'vue-router'
const router = useRouter();
import { useAuthStore } from '../store/authent';
const AuthStore = useAuthStore();

// ==========================

const LogoutHandler = () => {
  AuthStore.logout();
  router.push("/");
};
// ==========================
const links = ref([
  { name: "Home", href: "/" },
  { name: "Artikel", href: "/artikel" },
  { name: "Personal", href: "/personal" },
  { name: "Interrogativ", href: "/interrogativ" },
  { name: "Reflexiv", href: "/reflexiv" },
  { name: "Possessiv", href: "/possessiv" },
  { name: "Demonstrativ", href: "/demonstrativ" },
  { name: "Deklination", href: "/deklination" },
  { name: "Pronominale Adverbien", href: "/pronominaleAdverbien" },
  { name: "Modal", href: "/modal" },
  { name: "Passiv", href: "/passiv" },
  { name: "Konjunktiv-II", href: "/konjunktiv" },
  { name: "Verben", href: "/verben" },
  { name: "Rektion", href: "/rektion" },
  { name: "Nomen", href: "/nomen" },
  { name: "Form", href: "/form" },



  // { name: "Tasks", href: "/tasks" },
  // { name: "SignIn", href: "/signin" },
]);

var burgerActive = ref(false);
let auth;
var userEmail = ref('');
const isLoggedIn = ref(false)

const clickBurger = () => {
  // if (window.innerWidth <= 1200) {
  burgerActive.value = !burgerActive.value;
  if (burgerActive.value) {
    document.querySelector('body').classList.add("lock")
  } else {
    document.querySelector('body').classList.remove("lock")
  }
  // }

}



const handleWindowScroll = () => {
  const header = document.querySelector('.header')
  if (window.pageYOffset > 60) {
    header.classList.add("responciveHeader");
  } else {
    header.classList.remove("responciveHeader");
  }
};



// onUnmounted(() => {
//   window.removeEventListener("resize", handleWindowSizeChange);
// });

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}

</script>

<style lang="scss" scoped>
.header {
  @include transition;
  position: fixed;
  width: 100%;
  top: 0;
  background: $brown-4;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0) 51%, rgba(0, 0, 0, 0.3)) !important;
  z-index: 20000;



  .logo {
    padding: 5px;
    @include transition;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e06e;
    }

    a {
      border: none;
      display: inline-flex;
      column-gap: 10px;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  &__body {
    display: grid;
    grid-template-columns: 43px max-content;
    justify-content: space-between;
    column-gap: 20px;
    align-items: center;
    padding: 0 43px 0 0;

    a {
      margin: 0 0 0 auto;
    }
  }

  &__auth {
    display: flex;
    column-gap: 20px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      line-height: 1;
    }
  }

  &__links {
    @include flex-column;
    text-align: right;
    width: 100vw;
    max-height: 100vh;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 100px 40px 40px 40px;
    overflow: auto;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(15px);
    z-index: 1000;
    align-items: flex-end;

    a {

      white-space: nowrap;
      line-height: 1;
      padding: 5px;
    }

  }

  .router-link-active {
    color: $amber-9;
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

  .willkommen {
    font-family: 'MuseoSansCyrl-300', sans-serif;
    color: #efebe9;
    box-shadow: 0px 0px 4px 0px rgb(187 186 184 / 63%);
    border-radius: 50%;
    padding: 3px 8px;
    font-weight: 300;
    display: inline-block;
    transition: all 0.3s;
    cursor: pointer;
    margin: 0 0 0 auto;
  }

  .responciveHeader {
    // height: 50px;
    padding: 3px 0;
    backdrop-filter: blur(15px);

    @include transition;
  }
}

@media (max-width: 600px) {
  .header__body {
    display: block;
    gap: 0px 0px;
  }

  .header .auth-items {
    justify-self: start;
    margin: 0;
  }

  .header .logo {
    display: inline-block;
    margin: 0 0 5px 0;

    a {
      column-gap: 5px;


      svg {
        width: 25px;
        height: 25px;
      }
    }
  }


}

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
</style>
