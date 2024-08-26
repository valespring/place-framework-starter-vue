import Home from './Home';

const routeViews = {
	Home
};

export function getView(name) {
	return routeViews[name];
}
