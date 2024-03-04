export const GET_USER_DATA = 'GET_USER_DATA';



export const getUserDataAction = (token) => {
	return async (dispatch) => {
		const url = `http://localhost:3001/user/me`;
		try {
			const userData = await fetch(url, {
				method: 'GET',
				headers: {
				 Authorization: `Bearer ${token}`,
				},
			});
			if (userData.ok) {
				const user = await userData.json();
				dispatch({
						type: GET_USER_DATA,
						payload: user,
						loggedIn: true
				});
				
			} else {
				throw new Error('Errore nel download dei dati user');
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};
};