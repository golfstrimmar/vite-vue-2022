<script setup>
import { getDatabase, child, ref, query, set, get, onValue } from "firebase/database";
import './../firebase'

// 


// const namesRef = ref(db, 'names');
//   onValue(namesRef, (snapshot) => {
//     console.log('snapshot' + snapshot.val());
//     var bigOne = document.getElementById('bigOne');
//     Names = [...snapshot.val()]
//     console.log(Names);

//   });



// const dbRef = ref(getDatabase(), 'names');
// get(dbRef).then(

// (snapshot) => {
//   if (snapshot.exists()) {
//     let snapshotValue = snapshot.val()
//     var bigOne = document.getElementById('bigOne');
//     bigOne.innerHTML = snapshotValue;
//   } else {
//     console.log("No data available");
//   }
// }


// (snapshot) => {
//   Names  = snapshot.val()
//   console.log(Names);  
//  }


// ).catch((error) => {
//   console.error(error);
// });

let Names = [];

const db = getDatabase();
const namesRef = ref(db, `names`);
onValue(namesRef, (snapshot) => {
  Names = snapshot.val();
  console.log(Names);
  var bigOne = document.getElementById('bigOne');
  bigOne.innerHTML = Names;
});



// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: "resolved"
// }

// asyncCall();


</script>
<template>
  <div>
    <h2>taskList</h2>
    <q-card>
      <h2 id="bigOne"></h2>
    </q-card>

    <div class="Names">
      <q-card class="q-mb-md" v-for="name in Names" :key="name.key">
        {{name}}
      </q-card>
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>