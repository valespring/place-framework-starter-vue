import { createMemoryHistory, createRouter } from 'vue-router';

import Demo from '@views/Demo.vue';

const routes = [
	{ path: '/', component: Demo }
];

const router = createRouter({
	history: createMemoryHistory(),
	routes
});

export default router;