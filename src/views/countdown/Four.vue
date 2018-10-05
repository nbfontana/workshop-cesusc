<template>
  <CoolText :text="$i18n.t('four')"></CoolText>
</template>

<script>
import CoolText from '../../components/CoolText';

export default {
  name: 'four',
  components: {
    CoolText,
  },
  mounted() {
    const path = `/${this.$i18n.t('pathCountdown')}/${this.$i18n.t('pathThree')}`;
    setTimeout(() => this.$router.push(path), 1000);
  },
}
</script>

<style>
</style>
