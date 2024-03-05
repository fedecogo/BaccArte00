import { GET_USER_CART_DATA } from '../actions/cart';

const initialState = {
    "totCartPrice": 0.0,
    "bottles": []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
     case GET_USER_CART_DATA:

     return {
		...state,
        totCartPrice: [action.payload.totCartPrice],
        bottles: [action.payload.bottles]
      };
    default:
      return state;
  }
};

export default userReducer;