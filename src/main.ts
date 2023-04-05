import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'
import '@formkit/themes/genesis'

import './assets/main.css'

const app = createApp(App)

app.use(plugin, defaultConfig({ theme: 'genesis' }))

app.mount('#app')
