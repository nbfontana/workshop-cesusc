<template>
  <CoolText text="Three"></CoolText>
</template>

<script>
import CoolText from '../../components/CoolText';

export default {
  name: 'three',
  components: {
    CoolText,
  },
  mounted() {
    setTimeout(() => this.$router.push('/countdown/two'), 1000);
  },
}
</script>

<style>
</style>
