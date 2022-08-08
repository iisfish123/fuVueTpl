<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
locale.value = 'id'
// console.log(locale.value = 'id')
</script>
<template>
  <p>{{ t('hello') }}</p>
</template>
