import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/user';
import bottleReducer from '../reducers/bottle';

const allReducers = combineReducers({
	user: userReducer,
	bottle: bottleReducer,
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
