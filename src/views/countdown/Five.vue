<template>
  <CoolText :text="$i18n.t('five')"></CoolText>
</template>

<script>
import CoolText from '../../components/CoolText';

export default {
  name: 'five',
  components: {
    CoolText,
  },
  mounted() {
    const path = `/${this.$i18n.t('pathCountdown')}/${this.$i18n.t('pathFour')}`;
    setTimeout(() => this.$router.push(path), 1000);
  },
}
</script>

<style>
</style>
