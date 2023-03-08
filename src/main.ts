import { createApp } from 'vue'
import '@unocss/reset/tailwind.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'uno.css'
import '@/styles/index.scss'

const app = createApp(App)

app.use(createPinia()).mount('#app')
