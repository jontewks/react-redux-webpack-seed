const initialState = {}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'DEFAULT':
			return state
		default:
			return state
	}
}
