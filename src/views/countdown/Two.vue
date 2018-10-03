<template>
  <CoolText text="Two"></CoolText>
</template>

<script>
import CoolText from '../../components/CoolText';

export default {
  name: 'two',
  components: {
    CoolText,
  },
  mounted() {
    setTimeout(() => this.$router.push('/countdown/one'), 1000);
  },
}
</script>

<style>
</style>
