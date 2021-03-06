import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './variables.css'
import '@element-plus/icons-vue'
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
