import Home from './Home';

const routeViews = {
	Home
};

export const getRouteView = (name) => {
	return routeViews[name];
};

export default routeViews;

