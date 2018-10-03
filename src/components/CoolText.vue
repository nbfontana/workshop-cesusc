<template>
  <p class="cool-text">{{ text }}</p>
</template>

<script>
export default {
  name: 'coolText',
  props: {
    text: {
      type: String,
      default: 'Do not forget the text bro',
      required: false,
    }
  }
}
</script>

<style>
.cool-text {
  font-weight: bold;
  font-size: 1.5em;
}
</style>
