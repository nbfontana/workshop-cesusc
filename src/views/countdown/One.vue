<template>
  <CoolText :text="$i18n.t('one')"></CoolText>
</template>

<script>
import CoolText from '@/components/CoolText';

export default {
  name: 'one',
  components: {
    CoolText,
  },
  mounted() {
    const path = `/${this.$i18n.t('pathCountdown')}/${this.$i18n.t('pathWow')}`;
    setTimeout(() => this.$router.push(path), 1000);
  },
}
</script>

<style>
</style>
