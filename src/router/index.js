// Vue Base
import {
	createRouter, createWebHistory
} from 'vue-router';

// Views
// eslint-disable-next-line
import * as routeViews from '../views';

const routes = [{
	path: '/', component: getView(Home)
}];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
