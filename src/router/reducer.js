/** @flow */

const router = (state: RouterState, action: Action): RouterState => {
	switch (action.type) {
		case 'router/set': {
			return { ...state, currentRoute: action.payload }
		}
		default: {
			return state
		}
	}
}

export default router