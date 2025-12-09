import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import 'vant/lib/index.css'
import { ConfigProvider } from 'vant';

const app = createApp(App);

app
  .use(ConfigProvider)
  .mount('#app');
