<template>
  <div>
  <input v-model="name">
  <button @click="subm()">SUBM</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: ''
  }),
  methods:{
    subm() {
      this.$socket.emit("join", {
        name: this.name
      });
    }
  }
}
</script>

<style>

</style>