<template>
  <CoolText text="Four"></CoolText>
</template>

<script>
import CoolText from '../../components/CoolText';

export default {
  name: 'four',
  components: {
    CoolText,
  },
  mounted() {
    setTimeout(() => this.$router.push('/countdown/three'), 1000);
  },
}
</script>

<style>
</style>
