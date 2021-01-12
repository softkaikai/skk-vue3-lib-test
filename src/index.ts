import { createApp } from 'vue';
import AppComponent from './App.vue';
import Button from 'vant/lib/button';
import 'vant/lib/button/style';
// import AddComponent from '../lib/es/AddComponent';
// import AddComponent from '../lib/es/src/components/Add/AddComponent';
// import AddComponent from './components/Add/index'

const app = createApp(AppComponent);
app.use(Button);
const vm = app.mount('#app')
