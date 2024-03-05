import { GET_USER_DATA } from '../actions/user';

const initialState = {
  user: [],
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
     case GET_USER_DATA:

     return {
		...state,
        user: [action.payload],
        loggedIn: true,
      };
    default:
      return state;
  }
};

export default userReducer;
