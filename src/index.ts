import { createApp } from 'vue';
import AppComponent from './App.vue';
// import AddComponent from '../esm/AddComponent';
// import AddComponent from '../lib/es/src/components/Add/AddComponent';
// import AddComponent from './components/Add/index'

const app = createApp(AppComponent);
// app.use(AddComponent);
const vm = app.mount('#app')
