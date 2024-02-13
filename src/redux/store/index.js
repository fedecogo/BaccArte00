import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/user';
import cartReducer from '../reducers/cart';

const allReducers = combineReducers({
	user: userReducer,
	cart: cartReducer,
});
const store = configureStore({
	reducer: allReducers,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: false,
		});
	},
});

export default store;
