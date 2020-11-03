import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

for(let i = 0; i<10000; i++){
  console.log('am I slow?')
}

createApp(App).mount('#app')
