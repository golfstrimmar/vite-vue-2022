<template lang='pug'>
section
	p privat
</template>
<script setup>


// ------------firebase-------------

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config.ts";






// const docSnap = await getDoc(docRef);
// console.log("Document data:", docSnap.data());
// if (docSnap.exists()) {
// 	console.log("Document data:", docSnap.data());
// } else {
// 	// docSnap.data() will be undefined in this case
// 	console.log("No such document!");
// }




// const getUserData = async (uid, data) => {
// 	try {
// 		await setDoc(doc(db, "users", uid), data, { merge: true });
// 		console.log("User data saved!");
// 	} catch (error) {
// 		console.error("Error saving user data:", error);
// 	}
// };
// saveUserData(this.user.uid, this.user);




</script>
<style lang='scss' scoped></style>
