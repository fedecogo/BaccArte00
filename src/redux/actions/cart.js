export const GET_USER_CART_DATA = 'GET_USER_CART_DATA';

export const getUserCartDataAction = (token) => {
    return async (dispatch) => {
        const url = `http://localhost:3001/user/me/cart`;
        try {
			const userData = await fetch(url, {
				method: 'GET',
				headers: {
				 Authorization: `Bearer ${token}`,
				},
			});
if (userData.ok) {
    const userCart = await userData.json();
    dispatch({
        type: GET_USER_CART_DATA,
        payload: userCart
    });
	
} else {
    throw new Error('Errore nel download dei dati user');
}
} catch (error) {
console.log('Errore', error);
}
};
};