<template>
  <div>
    <CoolText :text="$i18n.t('countdown')"></CoolText>
    <router-view/>
  </div>
</template>

<script>
import CoolText from '@/components/CoolText';

export default {
  name: 'countdown',
  components: {
    CoolText,
  }
}
</script>

<style>
</style>
