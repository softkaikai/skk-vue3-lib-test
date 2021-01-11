import { createApp } from 'vue';
import AppComponent from './App.vue';
import AddComponent from '../lib/es/AddComponent';

const app = createApp(AppComponent);
app.use(AddComponent);
const vm = app.mount('#app')
