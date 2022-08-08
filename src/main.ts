import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// router
import router from './router/index'
// i18n
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  locale: 'id',
  messages
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
console.log(app)
