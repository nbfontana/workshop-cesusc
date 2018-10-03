<template>
  <CoolText text="One"></CoolText>
</template>

<script>
import CoolText from '../../components/CoolText';

export default {
  name: 'one',
  components: {
    CoolText,
  },
  mounted() {
    setTimeout(() => this.$router.push('/countdown/wow'), 1000);
  },
}
</script>

<style>
</style>
