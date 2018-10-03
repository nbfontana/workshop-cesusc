<template>
  <div>
    <CoolText text="Countdown"></CoolText>
    <router-view/>
  </div>
</template>

<script>
import CoolText from '../../components/CoolText';

export default {
  name: 'countdown',
  components: {
    CoolText,
  }
}
</script>

<style>
</style>
