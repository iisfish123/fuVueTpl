<script setup lang="ts">
// import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<template>
  Home Page3
  {{t('hello')}}
</template>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
