<template>
  <div id="counter-event-example">
	  <p>{{ total }}</p>
	  <button-counter v-on:increment="incrementTotal"></button-counter>
	  <button-counter v-on:increment="incrementTotal"></button-counter>
  </div>
</template>

<script>
//   import Counter from '@/components/Counter'
  export default {
    name: 'test',
    data () {
      return {
        total: 0
      }
    },
    methods: {
      incrementTotal: function () {
        this.total += 1
      }
    }
  }
</script>

<style scoped>
h1 {
  color: green;
}
</style>
