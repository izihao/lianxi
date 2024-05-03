
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { globals } from '../src/glboal/index'
const app = createApp(App)
app.use(globals)
app.use(createPinia())
app.use(router)

app.mount('#app')
