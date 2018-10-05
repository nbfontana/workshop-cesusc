<template>
  <CoolText :text="$i18n.t('three')"></CoolText>
</template>

<script>
import CoolText from '../../components/CoolText';

export default {
  name: 'three',
  components: {
    CoolText,
  },
  mounted() {
    const path = `/${this.$i18n.t('pathCountdown')}/${this.$i18n.t('pathTwo')}`;
    setTimeout(() => this.$router.push(path), 1000);
  },
}
</script>

<style>
</style>
