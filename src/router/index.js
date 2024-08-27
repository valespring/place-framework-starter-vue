// Vue Base
import {
	createRouter, createWebHistory
} from 'vue-router';

// Views
import { getRouteView } from '../views';

const routes = [{
	path: '/', component: getRouteView('Home')
}];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
