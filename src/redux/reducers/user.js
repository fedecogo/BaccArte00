import { GET_USER_DATA } from '../actions/user';

const initialState = {user:[]
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_DATA:
			return {
				...state,
				user: [action.payload],
			};

		default:
			return state;
	}
};

export default userReducer;
