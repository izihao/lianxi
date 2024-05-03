
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import svgicon from '@/components/svgicon.vue'
import type { App } from 'vue'
export default {
    install(app: App) {
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
        app.component('svgicon',svgicon)
    }
}