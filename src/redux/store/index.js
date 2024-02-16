import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/user';
import cartReducer from '../reducers/cart';
import themeReducer from '../reducers/theme';

const allReducers = combineReducers({
	user: userReducer,
	cart: cartReducer,
	theme: themeReducer,
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
