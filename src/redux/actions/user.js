export const GET_USER_DATA = 'GET_USER_DATA';
export const token = localStorage.getItem('token'); 



export const getUserDataAction = () => {
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
				const data = await userData.json();
                console.log(data)
				setTimeout(() => {
					dispatch({
						type: GET_USER_DATA,
						payload: data,
					});
				}, 500);
			} else {
				throw new Error('Errore nel download dei dati Utente');
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};
};