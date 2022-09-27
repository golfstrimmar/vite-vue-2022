<script setup>
import { ref, onMounted } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { db } from './../firebase';
import Dialog from './../components/Dialog.vue'
import {
  query, orderBy, limit,
  collection, where, onSnapshot,
  doc, setDoc, addDoc,
  deleteDoc, updateDoc
} from "firebase/firestore";
import Cards from "../components/Cards.vue";

const NewUrlToDo = ref('')
const NewContentToDo = ref('')
const NewTranstationToDo = ref('')
const CategoryToDo = ref('Familie')


const TodoesCollectionRef = collection(db, "todos")
const ToDoesCollectionQuery = query(TodoesCollectionRef, orderBy('date', 'desc'));
// const ToDoesCollectionQueryFamilie = query(TodoesCollectionRef, where("category", "==", "Familie"));
const todos = ref([
  // {
  //   id: 'id1',
  //   content: 'Shave my butt',
  //   done: false
  // },
  // {
  //   id: 'id2',
  //   content: 'Wash my butt',
  //   done: false
  // }
])


const addTodo = () => {
  // const addTodo = {
  //   id: uuidv4(),
  //   content: NewContentToDo.value,
  //   done: false
  // }
  // todos.value.unshift(addTodo)
  addDoc(TodoesCollectionRef, {
    url: NewUrlToDo.value,
    content: NewContentToDo.value,
    translation: NewTranstationToDo.value,
    category: CategoryToDo.value,
    done: false,
    date: Date.now()
  });
  NewUrlToDo.value = '';
  NewContentToDo.value = '';
  NewTranstationToDo.value = '';
  CategoryToDo.value = '';
}
const deliteToDo = (id) => {
  // todos.value = todos.value.filter(item => item.id != id)
  deleteDoc(doc(db, "todos", id));
}
const toggleDone = (id) => {
  const index = todos.value.findIndex(item => item.id === id)
  // todos.value[index].done = !todos.value[index].done
  updateDoc(doc(db, "todos", id), {
    done: !todos.value[index].done
  });
}

onMounted(() => {
  onSnapshot(ToDoesCollectionQuery, (querySnapshot) => {
    const fbTodos = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        url: doc.data().url,
        content: doc.data().content,
        translation: doc.data().translation,
        category: doc.data().category,
        done: doc.data().done
      }
      fbTodos.push(todo)
    })
    todos.value = [...fbTodos]
  });

})
</script>

<template>
  <div class="german-todo ">
      <h2 class="text-h5 text-uppercase">Fügen Sie einer der Kategorien ein Wort hinzu</h2>

    <q-form @submit.prevent="addTodo" class="q-gutter-y-md">
      <q-input filled v-model="NewUrlToDo" label="Das Bildchen Url" lazy-rules />
      <q-input filled v-model="NewContentToDo" label="Wort Auf Deutsch" lazy-rules />
      <q-input filled v-model="NewTranstationToDo" label="Wort Auf Russisch" />
      <div class="text-subtitle1">Geben Sie die Kategorie an</div>
      <div class="">
        <q-radio v-model="CategoryToDo" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Familie"
          label="Familie" />
        <q-radio v-model="CategoryToDo" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Kopf"
          label="Kopf" />
        <q-radio v-model="CategoryToDo" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Kurz"
          label="Kurz" />
      </div>
        <q-btn label="Karte hinzufügen" type="submit" :disabled="!NewContentToDo" color="primary" />
    </q-form>


    <!-- <Cards :todos="todos" @deliteToDo="deliteToDo"></Cards> -->

    <!-- <div class="card mb-4 " v-for="todo in todos" :key="todo.id" :class="{'has-background-success-light': todo.done}">
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div class="column" :class="{'has-text-success line-throw': todo.done } ">{{todo.content}}</div>
            <div class="column has-text-right">
              <button class="button  mr-2" :class="todo.done ? 'is-success' : ' is-light'"
                @click="toggleDone(todo.id)">&check;</button>
              <button class="button is-danger" @click="deliteToDo(todo.id)">&cross;</button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class=" row items-start ">
     

     
     
     
      <q-card class="my-card q-mr-md" v-for="todo in todos" :key="todo.id"
        :class="{'has-background-success-light': todo.done}">
        <q-img :src=todo.url>
          <div class="absolute-bottom  ">
           <i class="q-icon notranslate material-icons" aria-hidden="true" role="img">cached</i> 
            <div class="row justify-between items-center">
              <Dialog class="myDialog" :title="todo.content" :translation="todo.translation"></Dialog>
             <button class="" ">&cross;</button>
              <q-btn round color="negative" @click="deliteToDo(todo.id)" icon="cancel" />
            </div>
          </div>
        </q-img>
      </q-card> -->




  </div>
</template>

<style lang="scss" scoped>
.q-gutter-y-md {
  max-width: 700px;
  margin: 50px auto 0;
}

.line-throw {
  text-decoration: line-through;
}

.my-card {
  width: 300px;
  height: 300px;
  background: $indigo-1;
  border-radius: 10px;
  box-shadow: inset 0 0 20px $indigo-5;
  position: relative;


}



.q-img__content>div {
  padding: 7px 10px;

}

.q-img__image {
  display: block;
  width: auto;
  height: auto;
  object-fit: contain;
}

.q-btn--round {
  min-width: 2em;
  min-height: 2em;
}
</style>
