import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/user';

const allReducers = combineReducers({
	user: userReducer,
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
