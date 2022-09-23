<script setup>
import { getDatabase, child, ref, set, get, onValue } from "firebase/database";
import db from './../firebase'

// 

let Names =[];
const namesRef = ref(db, 'names');
  onValue(namesRef, (snapshot) => {
    console.log('snapshot' + snapshot.val());
    var bigOne = document.getElementById('bigOne');
    Names = [...snapshot.val()]
    console.log(Names);
    
  });




//  get(namesRef).then((snapshot) => {
//   if (snapshot.exists()) {
//     // bigOne.innerText = snapshot.val()
//     Names = [...snapshot.val()]
//     console.log(Names);
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

console.log('Names:' + Names);

</script>
<template>
  <div>
    <h2>taskList</h2>
    <!-- <h2 id="bigOne"></h2> -->

   
    <h4 v-for="name in Names" :key="name.key">
      {{name}}
    </h4>
  </div>
</template>



<style lang="scss" scoped>

</style>