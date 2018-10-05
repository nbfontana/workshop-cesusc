<template>
  <CoolText :text="$i18n.t('two')"></CoolText>
</template>

<script>
import CoolText from '../../components/CoolText';

export default {
  name: 'two',
  components: {
    CoolText,
  },
  mounted() {
    const path = `/${this.$i18n.t('pathCountdown')}/${this.$i18n.t('pathOne')}`;
    setTimeout(() => this.$router.push(path), 1000);
  },
}
</script>

<style>
</style>
