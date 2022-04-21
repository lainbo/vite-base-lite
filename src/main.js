import { createApp } from 'vue'
import { router } from '@/router/index.js'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'virtual:windi.css'
import '@/styles/global.scss'
import '@arco-design/web-vue/es/message/style/css.js'
createApp(App).use(router).use(createPinia()).mount('#app')
