// Vue
import { createApp, h } from 'vue';
import router from './router';
import App from './App.vue';

// Styles
import './scss/global.scss';

const app = createApp({
	render: () => h(App)
});

app.use(router).mount('#app');
