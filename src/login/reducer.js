/** @flow */

const login = (state: LoginState, action: Action): LoginState => {
	switch (action.type) {
		case 'login/success': {
			return { ...state, token: action.payload }
		}
		case 'login/failure': {
			return { ...state, error: action.payload }
		}
		default: {
			return state
		}
	}
}

export default login