import { createApp } from 'vue'
import { createAutoAnimatePlugin } from '@formkit/addons'
import { plugin, defaultConfig, createInput } from '@formkit/vue'
import AntFormKitSelect from '@/formkit-components/AntFormKitSelect.vue'
import { Select } from 'ant-design-vue'
import App from './App.vue'
import '@formkit/themes/genesis'

import './assets/main.css'

const app = createApp(App)

app.use(
  plugin,
  defaultConfig({
    theme: 'genesis',
    plugins: [createAutoAnimatePlugin()],
    inputs: {
      antSelect: createInput(AntFormKitSelect),
    },
  })
)
app.use(Select)

app.mount('#app')
