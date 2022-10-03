<script setup>
import { ref, onMounted } from 'vue';
import { db } from './../firebase';
import {
  query, orderBy,
  collection, onSnapshot,
  doc,
  deleteDoc, updateDoc
} from "firebase/firestore";
import Cards from "../components/Cards.vue";



const TodoesCollectionRef = collection(db, "todos")
const ToDoesCollectionQuery = query(TodoesCollectionRef, orderBy('content'));
const todos = ref([])
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
  <div class="german-todo">
    <Cards :todos="todos" @deliteToDo="deliteToDo"></Cards>
  </div>
</template>

<style lang="scss" scoped>
.q-gutter-md {
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
