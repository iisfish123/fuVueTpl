<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/store/user'

const { locale, t } = useI18n()
locale.value = 'id'

const user = useUserStore() // pinia store

const langToggle = () => {
  locale.value = 'en'
}

const userToggle = () => {
  user.login({
    name: 'admin',
    isAdmin: true
  })
}

</script>

<template>
  Home Page3
  <p>
    国际化test: {{ t('hello') }}
    <button @click="langToggle">切换语言</button>
  </p>

  <p>
    Pinia store name: {{ user.name }},
    isAdmin is {{ user.isAdmin }}
    <button @click="userToggle">测试pinia</button>
  </p>
</template>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
