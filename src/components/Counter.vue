<template>
  <button v-on:click="increment">
    {{ counter }}</button>
</template>

<script>

export default {
  name: 'button-counter',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    }
  }
}
</script>

<style scoped>
h1 {
  color: green;
}
</style>
