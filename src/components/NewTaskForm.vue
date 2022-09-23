<script>
import { reactive } from 'vue';

export default {

  setup() {
    const newTask = reactive(
      {
        description: '',
        completed: 'false'
      }
    )

    return {}
  }


}
</script>

<template>
  <div>
    <h2>taskForm</h2>
  </div>
</template>



<style lang="scss" scoped>

</style>