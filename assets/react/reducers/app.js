import {IS_LOADING} from '../constants/app';

const initialState = {
	showApp: false
}

export default function loader(state = initialState, action = {}) {
	switch (action.type) {
		case SHOW_APP:
			return {showApp : true}
		default:
			return state
	}
}