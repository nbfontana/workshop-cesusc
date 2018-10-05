<template>
  <div>
    <CoolText :text="$i18n.t('countdown')"></CoolText>
    <p>{{ message }}</p>
    <router-view/>
  </div>
</template>

<script>
import CoolText from '@/components/CoolText';
import env from '@/env';

export default {
  name: 'countdown',
  components: {
    CoolText,
  },
  computed: {
    message() {
      return env.secretKeyExample();
    }
  }
}
</script>

<style>
</style>
