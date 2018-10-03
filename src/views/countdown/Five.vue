<template>
  <CoolText text="Five"></CoolText>
</template>

<script>
import CoolText from '../../components/CoolText';

export default {
  name: 'five',
  components: {
    CoolText,
  },
  mounted() {
    setTimeout(() => this.$router.push('/countdown/four'), 1000);
  },
}
</script>

<style>
</style>
