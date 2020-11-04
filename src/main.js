import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

for(let i = 0; i<10000; i++){
  console.log(i);
}

createApp(App).mount('#app')
